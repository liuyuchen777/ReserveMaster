/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 11:27:08
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 08:38:21
 * @Description: 
 * @FilePath: /reserve_master/src/components/Logout.js
 * @GitHub: https://github.com/liuyuchen777
 */
import React from 'react'
import { withRouter } from 'react-router-dom'

function Logout(props) {
    return (
        <button className="btn" onClick={() => {
            props.history.push('/')
            window.location.reload()
        }}>Logout</button>
    )
}

export default withRouter(Logout)
