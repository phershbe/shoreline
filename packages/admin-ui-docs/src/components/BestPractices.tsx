import {
  Flex,
  IconCheckCircle,
  IconXOctagon,
  Paragraph,
  Stack,
  style,
  csx,
} from '@vtex/admin-ui'
import type { ReactNode } from 'react'
import React from 'react'

export function BestPractices(props: BestPracticesProps) {
  const { children } = props

  return (
    <Flex direction="column" className={csx(styles.practiceContainer)}>
      {children}
    </Flex>
  )
}

interface BestPracticesProps {
  children?: ReactNode
}

export function Practice(props: PracticeProps) {
  const { type = 'good', label, children } = props

  const { Icon, token } = {
    bad: {
      Icon: IconXOctagon,
      token: '$critical',
    },
    good: {
      Icon: IconCheckCircle,
      token: '$positive',
    },
  }[type]

  return (
    <Flex direction="column">
      <Flex className={csx(styles.previewContainer)}>{children}</Flex>
      <Stack
        className={csx(styles.practice(token))}
        direction="row"
        space="$space-2"
      >
        <Icon weight="fill" className={csx({ color: token })} />
        <Paragraph>{label}</Paragraph>
      </Stack>
    </Flex>
  )
}

const styles = {
  practiceContainer: style({
    '@tablet': {
      flexDirection: 'row',
      '> *': {
        maxWidth: '50%',
        minWidth: '50%',
      },
    },
    '& + &': {
      marginTop: '3.5rem',
    },
  }),
  previewContainer: style({
    '> *': {
      margin: '$space-0',
      '.preview-grid-container': { height: '100%' },
      '.wrapper-container': { height: '216px' },
    },
  }),
  practice: (token: string) =>
    style({
      borderTop: token,
      borderTopWidth: '2px',
      paddingY: '$space-4',
      paddingRight: '$space-2',
      width: '100%',
      alignItems: 'flex-start',
    }),
}

interface PracticeProps {
  type?: 'good' | 'bad'
  children?: ReactNode
  label: ReactNode
}
