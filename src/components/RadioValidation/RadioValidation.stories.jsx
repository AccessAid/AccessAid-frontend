import React from 'react';
import { useForm } from 'react-hook-form';
import { RadioValidation } from './RadioValidation';
import { Provider } from 'react-redux';
import { store } from './../../store/index';

export default {
  title: 'Components/RadioValidation',
  component: RadioValidation,
  argTypes: {
    nameField: {
      control: { type: 'text' },
      description: 'The name of the input field.',
      defaultValue: 'radio',
    },
    controllerProps: {
      control: { type: 'object' },
      description:
        'Props to be passed to the `Controller` component from react-hook-form.',
      defaultValue: { defaultValue: false },
    },
    rules: {
      control: { type: 'object' },
      description:
        'Validation rules object to be passed to the `Controller` component.',
      defaultValue: {
        required: {
          value: true,
          message: 'Por favor, seleccione esta casilla para continuar.',
        },
      },
    },
    inputProps: {
      control: { type: 'object' },
      description:
        'Props to be passed to the `Checkbox` component from @material-tailwind/react.',
      defaultValue: {
        containerProps: {
          className: '-ml-2.5',
        },
      },
    },
  },
};

const Template = (args) => {
  const hookFormMethods = useForm();

  return (
    <Provider store={store}>
      <form {...hookFormMethods}>
        <RadioValidation {...args} />
        <button type='submit'>Submit</button>
      </form>
    </Provider>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithRules = Template.bind({});
WithRules.args = {
  rules: { required: 'This field is required.' },
};

export const WithInputProps = Template.bind({});
WithInputProps.args = {
  inputProps: { color: 'teal' },
};

export const WithControllerProps = Template.bind({});
WithControllerProps.args = {
  controllerProps: { defaultValue: true },
};
