import type { ReactNode } from 'react'
import React, { createContext, useMemo, useState } from 'react'
import {
  Flex,
  IconCaretUp,
  tag,
  IconListBullets,
  Button,
  focusVisible,
  color,
} from '@vtex/admin-ui'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { unstable_useId as useId } from 'reakit'
import kebabCase from 'lodash/kebabCase'

import { useLocation } from '../hooks/useLocation'
import { VersionSwitcher } from './VersionSwitcher'

interface Data {
  allNavigationYaml: {
    nodes: Array<{
      section: string
      paths: string[]
    }>
  }
  allMdx: {
    nodes: Array<{
      frontmatter: {
        title: string
        path: string
        experimental?: boolean
      }
    }>
  }
}

interface BulkVisible {
  visible: boolean
}

const BulkVisibleContext = createContext<BulkVisible>({
  visible: false,
})

function useBulkVisible() {
  const ctx = React.useContext(BulkVisibleContext)

  if (!ctx) {
    throw Error('Error on VisibleContext')
  }

  return ctx
}

const findMeta = (data: Data, path: string) =>
  data.allMdx.nodes.find((node) => node.frontmatter.path === path)

const getTitle = (data: Data, path: string) =>
  findMeta(data, path)?.frontmatter?.title ?? ''

export function usePaths() {
  const data: Data = useStaticQuery(graphql`
    query DocsQuery {
      allNavigationYaml {
        nodes {
          section
          paths
        }
      }
      allMdx {
        nodes {
          frontmatter {
            title
            path
            fullPage
          }
        }
      }
    }
  `)

  const paths = useMemo(() => {
    return data.allNavigationYaml.nodes.reduce<
      Array<{ title: string; to: string }>
    >((acc, node) => {
      const nodePaths = node.paths.map((path) => {
        return {
          title: getTitle(data, path),
          to: path,
        }
      })

      return [...acc, ...nodePaths]
    }, [])
  }, [data])

  return {
    data,
    paths,
  }
}

export function Sidebar() {
  const { data } = usePaths()
  const { id: baseId } = useId({ baseId: 'docs-navigation' })
  const getId = (section: string) => `${baseId}-${kebabCase(section)}`

  const [bulkVisible, setBulkVisile] = React.useState(false)
  const { pathname } = useLocation()

  const visible = useMemo(() => {
    return bulkVisible
  }, [bulkVisible])

  return (
    <BulkVisibleContext.Provider
      value={{
        visible,
      }}
    >
      <tag.div
        csx={{
          height: 'calc(100vh - 64px)',
          marginTop: '64px',
          overflowY: 'auto',
          'nav:first-of-type': {
            margin: 0,
          },
          bg: '$primary',
        }}
      >
        <tag.div
          csx={{
            height: 64,
            top: 0,
            backdropFilter: 'blur(2px)',
            position: 'sticky',
            bg: 'linear-gradient(0deg,  rgba(255,255,255,.30) 0%, #FFF 30%)',
            color: color('pink40'),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 999,
          }}
        >
          <Button
            variant="adaptative-dark"
            size="small"
            csx={{
              marginX: 2,
              width: '100%',
              '>div': { justifyContent: 'start' },
            }}
            onClick={() => setBulkVisile((v) => !v)}
            icon={<IconListBullets />}
          >
            {visible ? 'Collapse' : 'Expand'} Sidebar Items
          </Button>
        </tag.div>

        <VersionSwitcher />
        {data.allNavigationYaml.nodes.reduce<ReactNode[]>((acc, node) => {
          const paths = node.paths.map((path) => (
            <Flex
              as="li"
              key={path}
              justify="space-between"
              csx={{
                listStyle: 'none',
                width: '100%',
              }}
            >
              <tag.a
                as={Link}
                csx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderRadius: 'default',
                  alignItems: 'center',
                  height: 32,
                  paddingX: 2,
                  marginX: 2,
                  width: '100%',
                  textDecoration: 'none',
                  color: '$secondary',
                  cursor: 'pointer',
                  marginBottom: 1,
                  lineHeight: 1.4,
                  transition: 'transform 150ms ease-in-out',
                  ':hover:not(:focus)': {
                    color: '$action.neutral.tertiaryHover',
                    bg: '$action.neutral.tertiaryHover',
                    transform: 'scale(1.03)',
                  },
                  ':active': {
                    bg: '$action.neutral.tertiaryPressed',
                    color: '$action.neutral.tertiaryPressed',
                    transform: 'scale(1.03)',
                  },
                  '&[aria-current="page"]': {
                    bg: '$inverted',
                    color: '$inverted',
                    ':hover': {
                      bg: '$inverted',
                      color: '$inverted',
                      boxShadow: '$ring.neutral',
                      transform: 'scale(1.03)',
                    },
                  },
                  ':focus': {
                    transform: 'scale(1.03)',
                  },
                  ...focusVisible('neutral'),
                }}
                to={path}
              >
                {getTitle(data, path)}
              </tag.a>
            </Flex>
          ))

          if (paths.length > 0) {
            return [
              ...acc,
              <Section
                key={node.section}
                id={getId(node.section)}
                section={node.section}
                initiallyVisible={node.paths.some((p) => p === pathname)}
              >
                {paths}
              </Section>,
            ]
          }

          return acc
        }, [])}
      </tag.div>
    </BulkVisibleContext.Provider>
  )
}

interface SectionProps {
  id?: string
  initiallyVisible?: boolean
  section: string
  children: ReactNode
}

function Section(props: SectionProps) {
  const { id, section, children, initiallyVisible } = props
  const [visible, setVisible] = useState(initiallyVisible)
  const { visible: bulkVisible } = useBulkVisible()

  React.useEffect(
    function syncStates() {
      setVisible(initiallyVisible || bulkVisible)
    },
    [bulkVisible, initiallyVisible]
  )

  return (
    <tag.nav
      csx={{
        paddingX: 4,
        paddingY: 1,
      }}
      aria-labelledby={id}
    >
      <tag.button
        csx={{
          ...focusVisible('neutral'),
          paddingY: 2,
          paddingX: 1,
          color: '$action.neutral.tertiary',
          bg: '$action.neutral.tertiary',
          fontSize: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          cursor: 'pointer',
          borderRadius: 'default',
          ':hover': {
            color: '$action.neutral.tertiaryHover',
            bg: '$action.neutral.tertiaryHover',
          },
          ':active': {
            color: '$action.neutral.tertiaryPressed',
            bg: '$action.neutral.tertiaryPressed',
          },
        }}
        id={id}
        onClick={() => setVisible((v) => !v)}
      >
        <p>{section}</p>{' '}
        <IconCaretUp
          csx={{
            zIndex: 1,
            color: 'muted',
          }}
          direction={visible ? 'up' : 'down'}
        />
      </tag.button>
      {visible && (
        <tag.ul
          csx={{
            padding: 0,
          }}
        >
          {children}
        </tag.ul>
      )}
    </tag.nav>
  )
}
