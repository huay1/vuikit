import mergeData from '@vuikit/core/helpers/vue-data-merge'

export default {
  functional: true,
  render: (h, { children, data }) =>
    h('ul', mergeData(data, { class: 'uk-iconnav uk-iconnav-vertical' }), children)
}