import { createOrUpdateFile, prettify } from './io'
import type { FunctionParser, ProjectParser } from 'typedoc-json-parser'
import { isComponent, toKebabCase, acronyms } from './strings'
import { getTemplate } from './templates'
import type {
  ComponentDocumentationPaths,
  PkgToBeDocumentedPaths,
} from './config'
import { existsSync, readFileSync } from 'fs'

/**
 * Generate the component documentation using the component template.
 * Searches for the component props in the interfaces and type aliases
 * reflections generated by typedoc. It writes the generated documentation.
 *
 * @param project The project parser
 * @param func The function parser of the component
 * @param paths The paths of the component documentation
 */
export async function generateComponent(
  project: ProjectParser,
  func: FunctionParser,
  paths: ComponentDocumentationPaths
) {
  const { docPath, filename } = paths
  const componentProps: ComponentProps[] = []

  const props = project.interfaces.find((i) => {
    return i.name === `${func.name}Props`
  })

  if (props) {
    props.properties.forEach((prop) => {
      componentProps.push({
        propName: prop.name,
        propOptional: prop.optional,
        propDescription: prop.comment?.description ?? '',
        propType: (() => {
          return `\`${prop.type
            .toString()
            .replaceAll('```ts', '')
            .replaceAll('```', '')}\``
        })(),
        propDefaultValue: (() => {
          const defaultValue =
            prop.comment.blockTags.find((tag) => {
              return tag.name === 'default'
            })?.text ?? ''

          if (!defaultValue) {
            return undefined
          }

          return defaultValue.replace('```ts', '`').replace('```', '`')
        })(),
      })
    })
  } else {
    const types = project.typeAliases.find((t) => {
      return t.name === `${func.name}Props`
    })

    if (types) {
      componentProps.push({
        propName: types.name,
        propOptional: false,
        propDescription: types.comment?.description ?? '',
        propType: (() => {
          return `\`${types.type
            .toString()
            .replaceAll('```ts', '')
            .replaceAll('```', '')}\``
        })(),
        propDefaultValue: undefined,
      })
    }
  }

  // Use component template
  const componentTemplate = getTemplate('component.mdx')

  // Generate component documentation
  const component = componentTemplate({
    sourceUrl: func.source?.url,
    name: 'API Reference',
    description: func.signatures[0].comment.description,
    example: (() => {
      const codeBlock = func.signatures[0].comment.blockTags.find(
        (tag) => tag.name === 'example'
      )?.text

      if (!codeBlock) {
        return false
      }

      return codeBlock.replace('```ts', '').replace('```', '')
    })(),
    parameters: func.signatures[0].parameters.map((param) => {
      return {
        paramName: param.name,
        paramType: `\`${param.type}\``,
      }
    }),
    props: componentProps,
  })

  const kebabCaseComponentName = toKebabCase(func.name)

  await createOrUpdateFile(
    `${docPath}/${kebabCaseComponentName}/${filename}`,
    component
  )
  await prettify(`${docPath}/${kebabCaseComponentName}/${filename}`)
}

/**
 * Generates the _meta.json file for Nextra.
 * To learn more about the _meta.json file, check out the Nextra docs.
 *
 * @link https://nextra.site/docs/guide/organize-files#_metajson
 * @param project The project parser
 */
export async function generateRootMetaJSON(
  project: ProjectParser,
  paths: PkgToBeDocumentedPaths
) {
  const metaTemplate = getTemplate('meta.json')

  if (paths.components?.docPath) {
    const components = project.functions.reduce<MetaFile>((result, func) => {
      if (isComponent(func.name)) {
        const key = func.name
          .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
          .toLowerCase()

        result.push({ key, value: func.name })
      }

      return result
    }, [])

    const meta = metaTemplate({
      components,
    })

    await createOrUpdateFile(`${paths.components.docPath}/_meta.json`, meta)
  }
}

/**
 * Generates the _meta.json file for Nextra for React components.
 * To learn more about the _meta.json file, check out the Nextra docs.
 *
 * @link https://nextra.site/docs/guide/organize-files#_metajson
 * @param project The project parser
 */
export async function generateComponentMetaJSON(
  func: FunctionParser,
  paths: ComponentDocumentationPaths
) {
  if (paths.docPath) {
    const metaTemplate = getTemplate('componentMeta.json')

    const metaPath = `${paths.docPath}/${toKebabCase(func.name)}/_meta.json`
    const name = paths.filename.replace(/\.[^/.]+$/, '')
    const capitalizedName = name
      .split('-')
      .map((word) => {
        if (acronyms[word]) {
          return acronyms[word]
        }

        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      .join(' ')

    if (!existsSync(metaPath)) {
      const meta = metaTemplate({
        name,
        capitalizedName,
      })

      await createOrUpdateFile(metaPath, meta)

      return
    }

    // Check if meta has filename and if it's correct.
    // Update it accordingly.
    const metaFile = JSON.parse(readFileSync(metaPath, 'utf8'))
    const metaFilenameValue = metaFile[name]

    if (metaFilenameValue !== capitalizedName) {
      // Update meta with correct filename
      metaFile[name] = capitalizedName
      await createOrUpdateFile(metaPath, JSON.stringify(metaFile))
    }
  }
}

/**
 * Component props interface of the component handlebar template,
 * organized in the same order as the template.
 */
interface ComponentProps {
  /**
   * The name of the prop
   */
  propName: string
  /**
   * Whether the prop is optional or not
   */
  propOptional: boolean
  /**
   * The description of the prop
   */
  propDescription: string
  /**
   * The type of the prop
   */
  propType: string
  /**
   * The default value of the prop. This comes from the `@default` TypeDoc tag
   */
  propDefaultValue?: string
}

/**
 * The _meta.json file interface for Nextra
 */
type MetaFile = Array<Record<string, string>>
