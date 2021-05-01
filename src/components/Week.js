/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 12:10:55
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 22:53:59
 * @Description: 
 * @FilePath: /reserve_master/src/components/Week.js
 * @GitHub: https://github.com/liuyuchen777
 */
import React from 'react'

function Week(props) {
    return (
        <button  className="btn" onClick={props.onClick}>{props.text}</button>
    )
}

export default Week
