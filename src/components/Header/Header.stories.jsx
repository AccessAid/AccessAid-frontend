import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
