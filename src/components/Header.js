/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 06:54:13
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 07:18:16
 * @Description: 
 * @FilePath: /reserve_master/src/components/Header.js
 * @GitHub: https://github.com/liuyuchen777
 */

function Header() {
    return (
        <div className="header">
                <h1>Fukawa Lab</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Fukawa Lab',
}

export default Header
