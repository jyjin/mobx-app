
import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { Titlebar, Button } from './jyjin-ui';

@observer
class App extends React.Component {

  state = {
    user: 'Eric',
    unreadCount: 1000,
  };

  onChange = (val) => {
    this.props.store.name = val;
  }

  getListDom = () => {
    const { getPersonList } = this.props.store
    let list = []
    getPersonList.map(person => {
      const { name, age } = person
      const ele = <li>{name}今年{age}岁</li>
      list.push(ele)
    })
    return list
  }

  render() {
    var { store: { name, age, addPerson, onChange, personList, getPersonList, loading } } = this.props
    const eles = this.getListDom()
    return (
      <div className="content">
        <Titlebar title="基本信息" />
        <Titlebar title="" />
        <Button text='增加' />
        <Button />
        <div>
          <div className="form-item">
            姓名：<input value={name} onChange={(e) => onChange('name', e.target.value)}></input>
          </div>
          <div className="form-item">
            年龄：<input value={age} onChange={(e) => onChange('age', e.target.value)}></input>
          </div>
          <div className="divider"></div>
          <div className="form-item">
            {/* <button onClick={addPerson}>添加{name}{loading}</button> */}
            <Button text={`添加${name}${loading}`} onClick={addPerson} />
          </div>
        </div>
        <ul className="list">
          {eles}
        </ul>
      </div>
    )
  }
}

export default App