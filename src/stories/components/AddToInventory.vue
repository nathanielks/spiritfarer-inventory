import PureComponent from '@/components/InventoryManager.vue'

const story = {
  title: 'components/InventoryManager',
  component: PureComponent,
  args: {
  }
}
export default story

// 👇 We create a “template” of how args map to rendering
const Template = (_, { argTypes }) => ({
  components: { PureComponent },
  props: Object.keys(argTypes),
  template: '<PureComponent v-bind="$props"/>'
})

// 👇 Each story then reuses that template
export const Primary = Template.bind({})
