import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Demo02 from './Demo02';
//rcc
//rafc
//rafce


const Demo01 = (props)=>{
    return (
        <div style={{width:100,height:100}}>
            <h2>Demo01</h2>
            <ul>
                <Context.Consumer>
                    {
                        (data)=>data.data.map(item=><li key={item}>{item}</li>)
                    }
                </Context.Consumer>
            </ul>
            <Demo02 />
        </div>
    )
}

Demo01.propTypes = {
    name: PropTypes.string.isRequired
}

Demo01.defaultProps = {    //设置默认值
    name:'tom'
}




export default Demo01;