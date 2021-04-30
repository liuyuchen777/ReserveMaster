/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 11:12:03
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 11:18:52
 * @Description: 
 * @FilePath: /reserve_master/src/components/Button.js
 * @GitHub: https://github.com/liuyuchen777
 */

import React from 'react'

function Button(props) {
    return (
        <button className="btn2" onClick={props.onClick} style={{backgroundColor: props.color}}>{props.text}</button>
    )
}

export default Button
