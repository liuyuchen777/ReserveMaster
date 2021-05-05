/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 14:46:57
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 07:51:57
 * @Description: 
 * @FilePath: /reserve_master/src/components/Submit.js
 * @GitHub: https://github.com/liuyuchen777
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

function Submit(props) {
    return (
        <button className="btn" onClick={() => {
            let httpRequest = new XMLHttpRequest()
            httpRequest.open('POST', 'http://192.168.231.129:9090/v1/main', false)
            httpRequest.setRequestHeader("Content-Type", "application/json");
            // console.log(equipment_list)
            httpRequest.send(JSON.stringify(props.equipment_list))
            if (httpRequest.status === 200) {
                console.log("Update Successful!")
            }
            props.history.push('/')
        }}>Submit</button>
    )
}

export default withRouter(Submit)
