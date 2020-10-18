// import React,{useEffect} from 'react'
// import {NavLink, Route, Redirect, RouteWithSubRoutes,withRouter} from 'react-router-dom'
// import './doc.css';
// import Login from './Login'
// import {NavBar,Icon} from 'antd-mobile'
// const DocContent = (props)=>{

//     return <h1>
//         {props.match.params.type}
//     </h1>
// }
// const Doc = (props) => {
//     console.log(props);
//     // const history = useHistory();
//     // //这些方法useHistory等等一般都在函数组件中用，声明一个变量接收
//     // const location = useLocation();
//     // const par = useParams();
//     // const mat = useRouteMatch();
//     // console.log(history);
//     // console.log(location);
//     // console.log(par);
//     // console.log(mat);

//     // useEffect(()=>{
//     //     if(!localStorage.getItem('userinfo')){
//     //         props.history.push({
//     //             pathname:'/login',
//     //             state:props.location
//     //         });
//     //     }
//     // },[])
//     return (
//         <div className='doc'>
//             {/* <NavBar
//                 mode="light"
//                 icon={ <Icon type="left" /> }
//                 onLeftClick={ () => console.log('onLeftClick') }
//                 rightContent={ [
//                     <Icon key="0" type="search" style={ { marginRight: '16px' } } />,
//                     <Icon key="1" type="ellipsis" />,
//                 ] }
//             >NavBar</NavBar> */}
//             <div className="content">
//                 {/* 嵌套路由 */}
//                 <Route path='/doc/:type' component={DocContent}/>
//                 <Redirect from='/doc' to='/doc/core'/>
//             </div>
//             <ol>
//                 <li><NavLink to='/doc/core'>核心概念</NavLink></li>
//                 <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
//                 <li><NavLink to='/doc/api'>API</NavLink></li>
//                 <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
//             </ol>
//         </div>
//     )
// }

// export default withRouter(Doc);


import React, { useEffect } from 'react'
import {
    NavLink, Route, Redirect,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter
} from 'react-router-dom'
import './doc.css';
import {NavBar,Icon} from 'antd-mobile'
import RouteWithSubRoutes from './RouteWithSubRoutes'

const Doc = (props) => {
    console.log(props)
    // const history = useHistory();
    // const location = useLocation();
    // const par = useParams();
    // const mat = useRouteMatch();
    // console.log(history);
    // console.log(location);
    // console.log(par);
    // console.log(mat);
    // useEffect(()=>{
    //     if(!localStorage.getItem('userinfo')){
    //         props.history.push({
    //             pathname:'/login',
    //             state:props.location
    //         })
    //     }
    // },[])
    return (
        <div className='doc'>
            {/* <NavBar
                mode="light"
                icon={ <Icon type="left" /> }
                onLeftClick={ () => props.history.goBack() }
                rightContent={ [
                    <Icon key="0" type="search" style={ { marginRight: '16px' } } />,
                    <Icon key="1" type="ellipsis" />,
                ] }
            >NavBar</NavBar> */}
            <div className="content">
                {/* 嵌套路由 */ }
                {/* <Route path='/doc/:type' component={ DocContent } /> */}
                {
                    props.routes.map(route=><RouteWithSubRoutes {...route}/>)
                }
                <Redirect from='/doc' to='/doc/core' />
            </div>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
            </ol>
        </div>
    )
}

export default withRouter(Doc);