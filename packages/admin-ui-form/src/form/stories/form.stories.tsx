import {
  csx,
  Inline,
  Stack,
  Button,
  TextInput,
  TextArea,
  get,
} from '@vtex/admin-ui'
import React from 'react'
import type { Meta } from '@storybook/react'

import { Form, useFormState } from '../index'

export default {
  title: 'admin-ui-form/form',
} as Meta

export const RegisterFields = () => {
  const form = useFormState()

  return (
    <Form onSubmit={(data) => console.log(data)} state={form}>
      <Stack space="$space-2">
        <Inline align="center">
          <TextInput label="First Name" {...form.register('firstName')} />
          <TextInput label="Age" type="number" {...form.register('age')} />
          <TextInput label="Favorite Food" {...form.register('favFood')} />
          <TextArea label="Favorite poem" {...form.register('favPoem')} />
        </Inline>
        <Button className={csx({ marginLeft: '$space-1' })} type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  )
}

const errors = {
  firstName: {
    required: 'First name is required',
    maxLength: 'The max length is 20',
  },
  age: {
    min: 'The min age is 18',
    max: 'The max age is 99',
  },
  favFood: {
    pattern: 'Only strings are accepted',
  },
  favPoem: {
    minLength: 'The min length is 5',
  },
}

export const validation = () => {
  const form = useFormState()

  return (
    <Form onSubmit={(data) => console.log(data)} state={form}>
      <Stack space="$space-2">
        <Inline>
          <TextInput
            label="First Name"
            error={!!form.formState.errors.firstName?.type}
            errorText={get(
              errors.firstName,
              form.formState.errors.firstName?.type
            )}
            {...form.register('firstName', { required: true, maxLength: 20 })}
          />
          <TextInput
            label="Age"
            type="number"
            error={!!form.formState.errors.age?.type}
            errorText={get(errors.age, form.formState.errors.age?.type)}
            {...form.register('age', { min: 18, max: 99 })}
          />
          <TextInput
            label="Favorite Food"
            error={!!form.formState.errors.favFood?.type}
            errorText={get(errors.favFood, form.formState.errors.favFood?.type)}
            {...form.register('favFood', { pattern: /^[A-Za-z]+$/i })}
          />
          <TextArea
            label="Favorite poem"
            error={!!form.formState.errors.favPoem?.type}
            errorText={get(errors.favPoem, form.formState.errors.favPoem?.type)}
            maxLength={50}
            {...form.register('favPoem', { minLength: 5 })}
          />
        </Inline>
        <Button className={csx({ marginLeft: '$space-1' })} type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  )
}
