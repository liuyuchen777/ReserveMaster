/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 09:15:54
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 11:47:40
 * @Description: 
 * @FilePath: /reserve_master/src/components/Equipments.js
 * @GitHub: https://github.com/liuyuchen777
 */
import React from 'react'
import Equipment from './Equipment'

function Equipments(props) {
    console.log(props.user)
    console.log(props.login_info)

    const numbers = Array.from({length: props.el.length}, (_, k) => k)
    const listItems = numbers.map((number) => 
        <Equipment item={props.el[number]} day={props.day} user={props.user} allUser={props.allUser}/>
    )
    // console.log("In here: ", props.el[0])
    
    return (
        <div className='sub-container'>
            <ul>{listItems}</ul>
        </div>
    )
}

export default Equipments
