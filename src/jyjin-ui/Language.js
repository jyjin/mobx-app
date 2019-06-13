/**
 * 组件库多语言统一加载
 * create by jyjin 
 *          at 2019.06.12
 */
import React from 'react'

export default (ele) => {

  return class extends React.Component {

    state = { language: null }

    fetchData() {
      // console.log('fetch data ...')
      return new Promise(resolve => {
        setTimeout(() => {
          const language = {
            cn: {
              "title": "JUI组件",
              "desc": "我是标题的默认描述",
              "button": 'JUI',
            },
            en: {
              "title": 'JUI Component',
              "desc": "I am a default description",
              "button": 'JUI',
            }
          }
          window.__JUIlanguage = language[this.state.local || 'cn']
          resolve(language[this.state.local || 'cn'])
        }, 1000)
      })
    }

    componentWillMount() {

      if (!window.__juiLanState) {
        window.__juiLanState = 'pending'
        this.fetchData().then(language => {
          window.__juiLanState = 'finish'
          this.setState({ language })
        })
      } else {
        const t = setInterval(() => {
          // console.log('waiting language ...')
          if (window.__juiLanState === 'finish') {
            this.setState({
              language: window.__JUIlanguage
            })
            clearInterval(t)
          }
        }, 400)
      }
    }

    i18n(key) {
      if (!this.state.language) {
        return key.toUpperCase()
      } else {
        return this.state.language[key]
      }
    }

    render() {
      // 这里是如果还未加载成功 默认不显示整个组件
      // if (!this.state.language) {
      //   return React.createElement(ele, { language, ...this.props, i18n: this.i18n.bind(this) }, null)
      // }
      // const { language } = this.state

      // 这里运用i18n方法 如果还未加载成功 默认显示多语言的CODE值
      return React.createElement(ele, { ...this.props, i18n: this.i18n.bind(this) }, null)
    }
  }
}