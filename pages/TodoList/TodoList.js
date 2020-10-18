import React, { Component } from 'react';
import List from './List';
import Input from './Input';

export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            inpValue:'',
            todos:[
                {title:'1',done:false},
                {title:'2',done:true},
                {title:'3',done:true},
                {title:'4',done:false}
            ]
        }
    }
    handleChange = (e)=>{
        //console.log(e.target.value);
        this.setState({inpValue:e.target.value});
    }
    addTodo = ()=>{
        if(this.state.inpValue == ''){
            return;
        }
        this.setState({
            todos:[
                {
                    title:this.state.inpValue,
                    done:false
                },
                ...this.state.todos
            ]            
        })
        this.setState({inpValue:''})
    }
    componentDidMount(){
        //this.input.focus();
        let todos = localStorage.getItem('todos');
        if(todos){
            this.setState({
                todos:JSON.parse(todos)
            })
        }
    }
    componentDidUpdate(){
        localStorage.setItem('todos',JSON.stringify(this.state.todos));
    }
    delTodo = (idx)=>{
        // let newTodos = JSON.parse(JSON.stringify(this.state.todos));
        // newTodos.splice(idx,1)
        // this.setState({todos:newTodos})
        this.setState({
            todos:this.state.todos.filter((item,index)=>index!=idx)
        }
    )
    //setState是异步执行的，注意callback的用法
    // this.setState({
    //     todos:this.state.todos.filter((item,index)=>index!=idx)
    // },()=>{
    //     localStorage.setItem('todos',JSON.stringify(this.state.todos));
    // });
    }
    toggle = (index)=>{
        let newTodos = JSON.parse(JSON.stringify(this.state.todos));
        newTodos[index].done = !newTodos[index].done;
        this.setState({
            todos:newTodos
        })
    }
    // renderTodos = (done)=>{
    //     return this.state.todos.map((todo,idx)=>{
    //         if(done==todo.done){
    //             return <li>
    //                 <input onClick={()=>this.toggle(idx)} type='checkbox' checked={done}/>
    //                 <span>{todo.title}</span>
    //                 <span dangerouslySetInterHTML={{__html:todo.title}}></span>
    //                 <button onClick={()=>this.delTodo(idx)}>删除</button>
    //             </li>
    //         }
    //     })
    // }
    render() {
        const {todos,inpValue} = this.state;
        let arr = todos.filter(item=>item.done);
        let arr1 = todos.filter(item=>!item.done);
        return (
            <div className="box">
                <Input handleChange={this.handleChange} addTodo={this.addTodo} todos={todos} inpValue={inpValue} />
                <h2>正在进行 {arr1.length}</h2> 
                <List toggle={this.toggle} delTodo={this.delTodo} todos={todos} done={false} />
                <h2>已经完成 {arr.length}</h2> 
                <List toggle={this.toggle} delTodo={this.delTodo} todos={todos} done={true} />
            </div>
        )
    }
}