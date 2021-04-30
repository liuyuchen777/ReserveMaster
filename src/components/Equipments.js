/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 09:15:54
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 14:43:57
 * @Description: 
 * @FilePath: /reserve_master/src/components/Equipments.js
 * @GitHub: https://github.com/liuyuchen777
 */
import React from 'react'
import Equipment from './Equipment'

function Equipments(props) {
    const numbers = Array.from({length: props.el.length}, (_, k) => k)
    const listItems = numbers.map((number) => 
        <Equipment item={props.el[number]} day={props.day} user={props.user}/>
    )
    // console.log("In here: ", props.el[0])
    
    return (
        <div className='sub-container'>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Equipments
