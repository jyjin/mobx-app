import React from 'react';
import WithLanguage from './Language';

class Button extends React.Component {
  render() {
    const { text, i18n, ...other } = this.props
    return <button
      {...other}
      style={{ marginRight: 10, marginBottom: 10, background: '#FFF', border: '1px solid #2196f3', borderRadius: 3, padding: '5px 10px', color: '#2196f3' }}>
      {text || i18n('button')}
    </button>
  }
}

export default WithLanguage(Button)