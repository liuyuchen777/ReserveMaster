/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 06:55:24
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 07:07:17
 * @Description: 
 * @FilePath: /reserve_master/src/components/Footer.js
 * @GitHub: https://github.com/liuyuchen777
 */

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <p>Author: @<a href="https://liuyuchen777.github.io">liuyuchen777</a></p>
            <p>Copyright &copy; 2021</p>
            <Link to='/About'>About</Link>
        </footer>
    )
}

export default Footer
