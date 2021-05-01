/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 10:47:15
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 11:22:52
 * @Description: 
 * @FilePath: /reserve_master/src/LoginFail.js
 * @GitHub: https://github.com/liuyuchen777
 */
import { Link } from 'react-router-dom'

function LoginFail(props) {
    return (
        <div>
            <center>
            <h2>{props.login_info}</h2>
            <Link to="/">Go Back</Link>
            </center>
        </div>
    )
}

export default LoginFail
