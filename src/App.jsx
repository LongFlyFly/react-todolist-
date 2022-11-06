import './App.css';
import { Component } from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';

export default class App extends Component{
// 状态在哪里，操作状态的方法就在哪里

  // 初始化状态
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打豆豆',done:false},
  ]}


  //addTodo用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj)=>{
		//获取原todos
		const {todos} = this.state
		//追加一个todo
		const newTodos = [todoObj,...todos]
		//更新状态
		this.setState({todos:newTodos})
	}
  
  // 勾选和取消勾选,用于更新一个对象
  updateTodo = (id,done)=>{
    // 获取状态中的todos
    const {todos} = this.state
    
   const newTodos = todos.map((todoObj)=>{
      if(todoObj.id===id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  //deleteTodo用于删除一个todo，接收的参数是todo对象
  deleteTodo = (id)=>{
    // 获取原来的todos
    const {todos} = this.state
    // 删除指定的id对象
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !==id
    })

    // 更新状态
    this.setState({todos:newTodos})
  }

  // 全选
  checkAllTodo = (done)=>{
    const {todos} = this.state
    // 加工数据
   const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  // 清除已完成的
  clearAllDone = () =>{
    const  {todos} =this.state
    const newTodos  = todos.filter((todoObj)=>{
      return !todoObj.done
    }) 

    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
         <Header addTodo={this.addTodo} />
         {/* 传数据 */}
         <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} /> 
         <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
        </div>
    </div>
    );
  }
}


