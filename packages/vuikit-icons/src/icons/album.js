// icon-album
export default {
  functional: true,
  props: {
    ratio: {
      type: [Number, String],
      default: 1
    }
  },
  render: function (h, { props, data }) {
    const { ratio } = props
    let {
      width = 20,
      height = 20,
      viewBox = '0 0 20 20'
    } = (data.attrs || {})

    if (ratio !== 1) {
      width *= ratio
      height *= ratio
    }

    return h('svg', {
      attrs: {
        version: '1.1',
        meta: 'vk-icons-album',
        width,
        height,
        viewBox,
        ratio
      },
      domProps: {
        innerHTML: '<rect x="5" y="2" width="10" height="1" /><rect x="3" y="4" width="14" height="1" /><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11" />'
      }
    })
  }
}