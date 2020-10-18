import React,{Component} from 'react'

export default class Input extends Component {
    render(){
        return (
            <div>
                <label htmlFor="inp" >todolist</label>
                <input  id='inp' ref={inp=>this.input = inp} value={this.inpValue} type='text' onChange={(e)=>this.props.handleChange(e)}/> 
                <button onClick={()=>this.props.addTodo()}> 添加 </button>     
            </div>
        );
    };
}