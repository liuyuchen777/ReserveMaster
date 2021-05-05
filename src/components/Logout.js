/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 11:27:08
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 07:53:42
 * @Description: 
 * @FilePath: /reserve_master/src/components/Logout.js
 * @GitHub: https://github.com/liuyuchen777
 */
import React from 'react'
import { withRouter } from 'react-router-dom'

function Logout(props) {
    return (
        <button className="btn" onClick={() => {
            props.allFlod()
            props.changeUser(-1)
            props.changeInfo("Hello, Stranger!")
            props.history.push('/')
            window.location.reload()
        }}>Logout</button>
    )
}

export default withRouter(Logout)
