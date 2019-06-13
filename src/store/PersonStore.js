
import { observable, action, computed } from 'mobx';

class PersonState {

  @observable id = 1;
  @observable name = '';
  @observable age = '';
  @observable personList = [];
  @observable loading = ''

  @action onChange = (name, val) => {
    console.log(name, val)
    this[name] = val
  }

  @action addPerson = () => {

    this.loading = '...'
    this.requestAdd().then(json => {
      this.setPersonList(json)
      this.name = this.age = ''
      this.loading = ''
    })
    // this.personList.push({
    //   id: this.id++,
    //   name: this.name,
    //   age: this.age
    // })
    // this.name = this.age = ''
  }

  requestAdd = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        let persons = this.personList
        persons.push({
          id: this.id++,
          name: this.name,
          age: this.age
        })
        resolve(persons)
      }, 400)
    })
  }

  @action setPersonList = (personList) => {
    this.personList = personList
  }

  @computed get getPersonList() {
    return this.personList
  }

}

export default new PersonState()

/**
 * 总结：
 * mobx相关
 * 1. store使用时，无论是props传递，还是同文件直接定义，都需要new实例化
 * 2. action方法的定义，是否使用箭头函数是有区别的，他们的调用方式不同
 * 3. computed 和同功能的函数，也有不同。computed后会进行缓存，可能有时不会更新，而普通函数每次都会计算并通知更新
 *
 * create-react-app 装饰器配置 方法一
 * 1. npm install  customize-cra react-app-rewired @babel/plugin-proposal-decorators --save
 * 2. 创建覆盖配置文件config-overrides.js
 *      const { override, addDecoratorsLegacy } = require('customize-cra');
 *      module.exports = override(
 *         addDecoratorsLegacy()
 *      );
 * 3. 修改package.json script项
 *      "scripts": {
 *          "start": "react-app-rewired start",
 *          "build": "react-app-rewired build",
 *          "test": "react-app-rewired test",
 *          "eject": "react-app-rewired eject"
 *       },
 */

// reate-react-app 装饰器配置 方法二
// 1. 创建项目
      // create-react-app mobx-app
      // npm run eject

      // //非react
      // npm install --save-dev babel-plugin-transform-decorators-legacy

      // //针对react
      // npm install babel-preset-stage-2 --save-dev
      // npm install babel-preset-react-native-stage-0 --save-dev
      // npm install --save mobx mobx-react


// 2.创建.babelrc
      // // react
      // {
      //   "presets": ["react-native-stage-0/decorator-support"]
      // }

      // // 非react
      // {
      //   "presets": [
      //     "es2015",
      //     "stage-1"
      //   ],
      //   "plugins": ["transform-decorators-legacy"]
      // }