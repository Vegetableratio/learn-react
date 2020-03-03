# learn-react

## 数据传递

**所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。**

纯函数?



state 允许 React 组件随用户操作、网络响应或者其他变化而动态更改输出内容。

state 是私有的，并且完全受控于当前组件



尽管 `this.props` 和 `this.state` 是 React 本身设置的，且都拥有特殊的含义，但是其实你可以向 class 中随意添加不参与数据流（比如计时器 ID）的额外字段。

```
父组件->子组件:props

子组件间通信:共同的父组件
```



```
数据传递
事件绑定
state
```



## 组件

```
组件名称必须以大写字母开头

受控组件:组件从父组件接收值,并通知父组件更新值
非受控组件:
函数组件:只包含render方法,不包含state
```





## 不可变性

```
不直接修改数据的好处:
	1.简化复杂的功能
	2.跟踪数据的改变
	3.确定在 React 中何时重新渲染
```





## 生命周期

```
componentDidMount:第一次被渲染到 DOM 中的时候
componentWillUnmount:组件被删除的时候
```





## setState

```js
1.不要直接修改 State,直接修改不会重新渲染组件
2.State 的更新可能是异步的;出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。
	让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数:
	this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
3.State 的更新会被合并
```



## 事件处理

```
1.React 事件的命名采用小驼峰式（camelCase），而不是纯小写。

2.使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

3.在 React 中不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。
  在 React 中 event 是一个合成事件。

4.<button onClick={(e) => this.handleClick(e)}/>
  如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染;通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。

5.向事件处理程序传递参数
  <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
  <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
  这两种情况下，React 的事件对象 e 会被作为第二个参数传递。
```



## 条件渲染





## 状态提升



## 组合vs继承



```
包含关系:通过{props.children},将子组件传递到渲染结果中,这使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们。

特例关系:“特殊”组件可以通过 props 定制并渲染“一般”组件
```



无需使用继承来构建组件层次

