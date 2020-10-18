import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import List from '../components/List';
import Buttons from '../components/Buttons';

class Home extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        data:[]
      }
      //this.handleClick = this.handleClick.bind(this);
      //console.log('didmount');
      //console.log(props);
      
      // setTimeout(()=>{
      //   this.setState({data:[5,6,7,8,9]})
      // },500)
    }
  componentDidMount(){
    console.log(this.props);
    fetch('https://cnodejs.org/api/v1/topics')
    .then(res=>res.json())
    .then(({data})=>{
      this.setState({data})
    })
  }
  
  getData = (page)=>{
    fetch('https://cnodejs.org/api/v1/topics?page='+page)
    .then(res=>res.json())
    .then(({data})=>{
      this.setState({data})
    })
  }
  render(){
    console.log('render');
    //console.log(this.props);
    const { data } = this.state;
    //const btns = [1,2,3,4,5];
    return <div>
       {/* {
        btns.map(
          (item)=>(
          <button 
          key={item} 
          onClick={()=>this.getData(item)}>{item}</button>
        ))
      }  */}
      <Buttons getData={this.getData} />
      <List data={data}/>
      </div>
    }
    /*return <ul>
        {
          data.map(
            (item)=><li>{item.title}</li>
          )
        }
      </ul>*/
  }



//默认导出(只能导出一个)
export default Home;
//命名导出
//let a = 100;
//export {Home}
//export {a}
