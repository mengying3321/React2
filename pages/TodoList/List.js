import React,{Component} from 'react'

export default class List extends Component {
    render(){
        return (
            <div>   
                <ul style={{color:3<2?'red':'black'}}>{
                    this.props.todos.map((todo,idx)=>{
                        if(this.props.done == todo.done){
                            return <li>
                                <input type='checkbox' onClick={() => this.props.toggle(idx)} checked={this.props.done}  />
                                <span dangerouslySetInterHTML={{__html:todo.title}}></span>
                                <span>{todo.title}</span>
                                <button onClick={()=>this.props.delTodo(idx)}>删除</button>
                            </li>
                        }
                    })
                } </ul>   
            </div>
        );
    }
}
