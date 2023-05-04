import React from 'react';
import { Provider } from 'react-redux';
import { store } from './../../store/index';
import { RegistrationForm } from './RegistrationForm';

export default {
  title: 'Components/RegistrationForm',
  component: RegistrationForm,
};

const Template = (args) => (
  <Provider store={store}>
    <RegistrationForm {...args} />
  </Provider>
);

export const Default = Template.bind({});
