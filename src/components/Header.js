/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 06:54:13
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 23:54:42
 * @Description: 
 * @FilePath: /reserve_master/src/components/Header.js
 * @GitHub: https://github.com/liuyuchen777
 */

import { useLocation } from 'react-router-dom'

function Header(props) {
    const location = useLocation()

    return (
        <div className="header">
                <h1>Fukawa Lab</h1>
                {location.pathname==='/main' && 
                    props.allUser.find(element => element.getID() === props.user)!==undefined ? <h2>Welcome&nbsp;
                    {props.allUser.find(element => element.getID() === props.user).getName()}!</h2> : <h2> </h2> }
        </div>
    )
}

Header.defaultProps = {
    title: 'Fukawa Lab',
}

export default Header
