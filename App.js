//React官网首页
import React from 'react';
import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
import Header from './pages/React/Header';
import routes from './router.config';
import RouteWithSubRoutes from './pages/React/RouteWithSubRoutes';

//路由基本配置
//路由传参（以及获取参数-props）
//动态路由（/：pages）
//js跳转
//权限路由
// npm i antd-mobile --registry https://

//Router要在最外层最外层，Link,NavLink等等都要包在Router的里面


const App = () => {
	return <Router>
		<Header />
		<Switch>
			{
				routes.map((route, i) => {
					return <RouteWithSubRoutes key={i} {...route} />
				})
			}
		</Switch>
	</Router>
}
export default App;

// const App = ()=>{
// 	return <Router>
// 		<Header />
// 		<Switch>
// 			{/* home组件这种配置方式会在Home组件的props内注入四个属性
//     		console.log(history);
// 			<Route exact path='/' component={Home} />
// 			<PrivateRoute path='/doc' component={Doc} />
// 			<Route exact path='/doc/:id' component={Doc} />
// 			<PrivateRoute path='/tuto' component={Tuto}/>
// 			<PrivateRoute path='/blog' component={Blog}/>
// 			<Route path='/comm' component={Comm}/>
// 			<Route path='/login' component={Login}/>
//       		no-match
//      		<Route component={()=><div>404</div>} />
//       		<Route path='*' component={()=><div>404</div>} /> */}
// 			  {
// 				//   routes.map(({pri,...rest})=>{
// 				// 	  if(pri){
// 				// 		  return <PrivateRoute {...rest} />
// 				// 	  }
// 				// 	  return <Route {...rest} />
// 				// 	})
// 				routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route} />))
// 			  }
// 		</Switch>
// 	</Router>
// }



// import React from 'react';
// import { BrowserRouter as Router, Redirect, Route, NavLink, Switch } from 'react-router-dom'
// import Header from './pages/React/Header';
// import routes from './router.config';
// import {Button,TabBar} from 'antd-mobile'
// import Mytab from './taobao/Mytab';
// import Home from './taobao/Home';
// import Cart from './taobao/Cart';
// import Order from './taobao/Order';
// import Mine from './taobao/Mine';



// const App = ()=>{
// 	return <Router>
// 		<Switch>
// 			<Route exact path='/' component={Home} />
// 			<Route path='/cart' component={Cart} />
// 			<Route path='/order' component={Order} />
// 			<Route path='/mine' component={Mine} />
// 		</Switch>
// 		<Mytab />
// 	</Router>
// }







// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// let ele =<h1 id="title">React111</h1>  //JSX语法，写起来像HTML
// console.log(ele);

// function App() {
//   return (
//     <div className="App">
      
//       {/*<header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>React</h1>
//     <ul>{
//       [1,2,3,4,5].map((item)=><li>{item}</li>)
// }
//     </ul>
//     </div>
//   );
// }

// export default App;
