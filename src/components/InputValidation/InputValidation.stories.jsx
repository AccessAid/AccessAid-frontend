import React from 'react';
import { useForm } from 'react-hook-form';
import { InputValidation } from './InputValidation';
import { Provider } from 'react-redux';
import { store } from './../../store/index';

export default {
  title: 'Components/InputValidation',
  component: InputValidation,
  argTypes: {
    nameField: {
      control: { type: 'text' },
      description: 'The name of the input field.',
      defaultValue: 'username',
    },
    controllerProps: {
      control: { type: 'object' },
      description:
        'Props to be passed to the `Controller` component from react-hook-form.',
      defaultValue: { defaultValue: '' },
    },
    rules: {
      control: { type: 'object' },
      description:
        'Validation rules object to be passed to the `Controller` component.',
      defaultValue: {
        required: {
          value: true,
          message: 'Por favor, escriba su nombre de usuario.',
        },
      },
    },
    inputProps: {
      control: { type: 'object' },
      description:
        'Props to be passed to the `Input` component from @material-tailwind/react.',
      defaultValue: { size: 'lg', label: 'Username', type: 'text' },
    },
  },
};

const Template = (args) => {
  const hookFormMethods = useForm();

  return (
    <Provider store={store}>
      <form {...hookFormMethods}>
        <InputValidation {...args} />
        <button type='submit'>Submit</button>
      </form>
    </Provider>
  );
};

export const Default = Template.bind({});

export const WithPasswordField = Template.bind({});
WithCustomNameField.args = {
  nameField: 'password',
};

export const WithCustomInputProps = Template.bind({});
WithCustomInputProps.args = {
  inputProps: {
    placeholder: 'Enter your password',
    type: 'password',
    size: 'regular',
    outline: true,
  },
};

export const WithRules = Template.bind({});
WithRules.args = {
  rules: {
    required: 'This field is required',
    maxLength: {
      value: 10,
      message: 'This field must have at most 10 characters',
    },
  },
};
