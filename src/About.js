/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 07:04:27
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 12:34:55
 * @Description: 
 * @FilePath: /reserve_master/src/About.js
 * @GitHub: https://github.com/liuyuchen777
 */
import { Link } from 'react-router-dom'

function About(props) {
    return (
        <div>
            <center>
            <h4>Version 1.0.0</h4>
            {props.backState === -1 ? <Link to="/">Go Back</Link> : <Link to="/main">Go Back</Link> }
            
            </center>
        </div>
    )
}

export default About
