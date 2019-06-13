import React from 'react';
import WithLanguage from './Language';

class Titlebar extends React.Component {

  render() {
    // console.log('title props == ', this.props)

    const { title, i18n } = this.props

    return <div style={{ marginRight: 10, marginBottom: 10, textAlign: 'left', padding: '0px 10px', borderLeft: '2px solid #1593ec' }}>
      {title || i18n('title')}
      <span style={{ fontSize: 12, color: '#939393', paddingLeft: 20, display: 'inline-block' }}>{i18n('desc')}</span>
    </div>
  }
}

export default WithLanguage(Titlebar)