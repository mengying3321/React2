import React,{useState,useEffect,useContext} from 'react'
import Context from './Context'
let i = 0;
const Hook = () => {   //只在最顶层使用Hook，例如不能嵌套在函数或者if语句中 

    const context = useContext(Context);
    console.log(context);

    const [time,setTime] = useState(new Date().toLocaleString());
    //if(i%2==0){
        const [data,setData] = useState(123);
    //}
    //useEffect是代替生命周期函数来使用的
    //第二个参数是空数组时相当于componentDidMount
    useEffect(()=>{
        console.log('effect');
        setInterval(() => {
            i++;
            //console.log(i++);
            setTime(new Date().toLocaleString());
        }, 1000);
        return ()=>{
            console.log('componentWillUnmount');
        }
    },[])
    //每隔一秒走一次，i会越加越快，会同时开了很多定时器，i会加好多次
    // setInterval(() => {
    //     console.log(i++);
    //     setTime(new Date().toLocaleDateString());
    // }, 1000);
    //console.log(1);

    //第二个参数不加或者指定某个值时相当于componentDidUpdate
    useEffect(()=>{  //每次一更新，就会被执行
        console.log(1);
    })
    return (
        <div>
            {time}
            <h1>{context}</h1>
        </div>
    )
}
export default Hook