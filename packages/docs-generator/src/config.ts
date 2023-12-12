import type TypeDoc from 'typedoc'

/**
 * The default TypeDoc config
 */
export const defaultTypedocConfig: Partial<TypeDoc.Configuration.TypeDocOptions> =
  {
    excludeExternals: true,
    externalPattern: ['**/node_modules/**'],
    commentStyle: 'all',
    plugin: ['typedoc-plugin-mdn-links'],
  }

/**
 * The TypeDoc configuration interface for a package
 */
export interface Config {
  /**
   * The pattern which will be used to match the files to be documented
   *
   * @example
   * ['src/components/index.ts', 'src/hooks/index.ts']
   */
  entryPoints: string[]
  /**
   * The pattern which will be used to exclude files from the documentation generation
   *
   * @example
   * ['components/src/<double-asterisk>/<asterisk>+(index|.vitest|.e2e|.test|.stories).(ts|tsx)']
   */
  exclude: string[]
  /**
   * The path to the tsconfig file of the project
   *
   * @example
   * 'tsconfig.json'
   */
  tsconfig: string
}

/**
 * The configuration of the package to be generated
 */
export interface PkgToBeDocumented {
  /**
   * The name of the package
   *
   * @example
   * '@vtex/shoreline-components'
   */
  name: string
  /**
   * The version of the package
   *
   * @example
   * '^1.x'
   */
  version: string
  /**
   * The paths to specific kinds of elements within the package.
   * This is used to let the generator know where to look for
   * the metadata of the supported elements.
   */
  paths: PkgToBeDocumentedPaths
  /**
   * The configuration of the package for TypeDoc
   */
  config: Config
}

/**
 * The paths to specific kinds of elements within the package.
 * This is used to let the generator know where to look for
 * the metadata of the supported elements.
 */
export interface PkgToBeDocumentedPaths {
  /**
   * The path where the components documentation should be generated
   */
  components?: string
}

/**
 * The temporary path where the JSON docs will be generated
 */
export const tmpDocsJsonPath = './tmp/documentation.json'
