import React from 'react';
import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
import './App.css';
//HashRouter 使用 URL 中的 hash（#）部分去创建路由
//import {HashRouter as Router,Route,NavLink} from 'react-router-dom'


//import Context from './Context';
//import Demo01 from './Demo01';
//import { render } from 'react-dom';
// console.log(Context);

// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             data:['hello','context'],
//         }
//     }
//     changeData = (newData)=>{
//         this.setState({data:[...this.state.data,newData]})
//     }
//     render(){
//         return (
//             <Context.Provider value={{
//                 data:this.state.data,
//                 changeData:this.changeData
//             }}>
//                 <Demo01 />
//             </Context.Provider>
//         )
//     }
// }



// const Home = ()=>{
//     return <div>Home</div>
// }

// const About = (props)=>{
//     console.log(props.location.state);
//     return <div>About</div>
// }
// const Content = (props)=>{
//     console.log(props);
//     return <div>{props.match.params.page}</div>
// }
// const App = ()=>{
//     return <Router>
//         <ul>
//             <li><NavLink exact activeStyle={{color:'red'}} to='/'>home</NavLink></li>
//             <li><NavLink activeStyle={{color:'red'}} to={{
//                 pathname:'/about',
//                 state:{id:100}
//             }}>About</NavLink></li>
//             <li><NavLink activeStyle={{color:'red'}} to='/news'>News</NavLink></li>
//             <li><NavLink activeStyle={{color:'red'}} to='/content/1'>content01</NavLink></li>
//             <li><NavLink activeStyle={{color:'red'}} to='/content/2'>content02</NavLink></li>

//         </ul>
//         {/* Route单双标签均可用
//             component的值是一个组件
//         */}
//         <Switch>
//             <Route exact path='/' component={Home} />
//             {/* <Route path='/about'>
//                 <About />
//             </Route> */}
//             <Route path='/about' component={About} />
//             <Route exact path='/news' render={()=><div>News</div>} />
//             {/* 当被挂载时，Redirect将路由重定向为 to 属性指定的地址 */}
//             {/* <Route path='/about' render={()=><Redirect to='/news' />} /> */}
//             <Route path='/content/:page' component={Content} />
//         </Switch>

//     </Router> 
// }



/*自己写的，跟着老师一起写的见外层的App.js和Header.js等*/
// const File = ()=>{
//     return <div>文档</div>
// }
// const Course = ()=>{
//     return <div>教程</div>
// }
// const Blog = ()=>{
//     return <div>博客</div>
// }
// const Community = ()=>{
//     return <div>社区</div>
// }
// const App = ()=>{
//     return <Router>
//         <ul className='box'>
//             <li><NavLink exact activeStyle={{color:'blue'}} to='/'>文档</NavLink></li>
//             <li><NavLink activeStyle={{color:'blue'}} to='/course'>教程</NavLink></li>
//             <li><NavLink activeStyle={{color:'blue'}} to='/blog'>博客</NavLink></li>
//             <li><NavLink activeStyle={{color:'blue'}} to='/community'>社区</NavLink></li>
//         </ul>
//         <Switch>
//             <Route exact path='/' component={File} />
//             <Route exact path='/course' component={Course} />
//             <Route exact path='/blog' component={Blog} />
//             <Route exact path='/community' component={Community} />


//         </Switch>
//     </Router>
// }

// export default App;