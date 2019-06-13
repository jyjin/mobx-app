
import React from 'react';
import { observer } from 'mobx-react';
import './App.css';

@observer
class App extends React.Component {

  onChange = (val) => {
    this.props.store.name = val;
  }

  render() {
    var { store: { name, age, addPerson, onChange, personList } } = this.props
    return (
      <div className="content">
        当前计数值：<p>{store.num}</p>
        <button onClick={store.numAdd}>+1</button>
        当前队列：<p>[{store.arr.join(',')}]</p>
        <button onClick={() => store.push(10)}>+1</button>

      </div>
    )
  }
}

export default App