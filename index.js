import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import 'antd-mobile/dist/antd-mobile.css'
import App from './App';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);



let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
})
.then(res=>res.json())
.then(res=>console.log(res))




//import './index.css';
//import * as serviceWorker from './serviceWorker';
//import $ from 'jquery';
//console.log($);


// import Control from './components/Control';
// import Demo01 from './pages/Demo01';

// import Hoc,{Detail} from './pages/Hoc';
// import Hook from './pages/Hook';
// import Context from './pages/Context';
//console.log(Context);


//alt shift + 上下键   复制一行
//alt + 上下键         移动一行
//按住alt,鼠标点击
//Ctrl + shift + 左右键  选中整个单词
//Ctrl + shift+ L      



// let List = (props)=>{
//   return <ul>
//     {
//       props.data.map(
//         (item)=><li key={item.id}>{item.title}</li>
//       )
//     }
//   </ul>
// }
// class Home extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       data:[]
//     }
//     //this.handleClick = this.handleClick.bind(this);
//     //console.log('didmount');
//     //console.log(props);
    
//     // setTimeout(()=>{
//     //   this.setState({data:[5,6,7,8,9]})
//     // },500)
//   }
// componentDidMount(){
//   console.log(this.props);
//   fetch('https://cnodejs.org/api/v1/topics')
//   .then(res=>res.json())
//   .then(({data})=>{
//     this.setState({data})
//   })
// }

// getData = (page)=>{
//   fetch('https://cnodejs.org/api/v1/topics?page='+page)
//   .then(res=>res.json())
//   .then(({data})=>{
//     this.setState({data})
//   })
// }
// render(){
//   console.log('render');
//   //console.log(this.props);
//   const { data } = this.state;
//   const btns = [1,2,3,4,5];
//   return <div>
//     {
//       btns.map(
//         (item)=>(
//         <button 
//         key={item} 
//         onClick={()=>this.getData(item)}>{item}</button>
//       ))
//     }
//     <List data={data}/>
//     </div>
//   }
//   /*return <ul>
//       {
//         data.map(
//           (item)=><li>{item.title}</li>
//         )
//       }
//     </ul>*/
// }
/*ReactDOM.render(
  //<Home data='abc'/>,
  //<Control />,
  //<Demo01 />,
  //<App />,
  //<div><Hoc /><Detail name='tom' /></div>,
  <Context.Provider value='123'>
    <Hook />
  </Context.Provider>,
  document.getElementById('root')
);*/


/*setInterval(()=>{
  let ele = <h1 id='tltle' className="tit">
    <div>当前时间</div>
    {new Date().toLocaleString()}
  </h1>;
  ReactDOM.render(
    ele,
    document.getElementById('root')
  );
},1000)
*/

/*
//组件声明
//函数组件
//UI（展示）组件，木偶组件（将来传什么就展示什么）
function App(props){
  console.log(props);
  const{title,id} = props
  return <div>
    <h1>App组件内容</h1>
    <div>{title}</div>
    <div>{id}</div>
  </div>
}
//智能组件
class Demo extends React.Component{   //Component后面没有小括号
  constructor(){
    super();
    //声明状态
    this.state = {
      name:new Date().toLocaleString()
    }
    setInterval(()=>{     //必须用箭头函数，因为this要拿到的是Demo的值
      this.setState({name:new Date().toLocaleString()})
    },1000)
  }
  render(){
    return <div>
      <div>name:{this.state.name}</div>
      <App title={this.state.name} id='app' />
    </div>
  }
}
ReactDOM.render(
  <Demo />,
  document.getElementById('root')
);  */




/*let ele = React.createElement(
  'h1',
  {id:'title'},
  React.createElement('div',{},'hello react'),
  'react'
)*/




// let ele = <h1 id='title' className='tit'>
//   react
//   <div>{['hello','world']}</div>
// </h1>
// console.log(ele);
// //将JSX对象渲染到DOM中
// let ReactDOM = {
//   render(eleObj,container){
//     //解构
//     const {type,props} = eleObj;
//     //创建第一层节点
//     let ele = document.createElement(type);
//     //遍历属性对象，将属性添加到第一层节点对喜上
//     for(const prop in props){
//       console.log(prop);
//       if(prop == 'children'){
//         if(typeof props.children == 'string'){
//           const txtNode = document.createTextNode(props.children);
//           ele.appendChild(txtNode);
//           break;
//         }
//         //将第一层节点对象的子元素添加进去
//         props.children.forEach(child=>{
//           if(typeof child == 'string'){
//             const txtNode = document.createTextNode(child);
//             ele.appendChild(txtNode);
//           }else{
//             ReactDOM.render(child,ele);
//           }
//         })
//       }else{
//         ele[prop] = props[prop];
//       }
//     }
//     //将第一层DOM节点添加到container中
//     container.appendChild(ele);
//   }
// }



//原生JS，（JQ）
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

