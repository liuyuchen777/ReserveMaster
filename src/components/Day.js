/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 07:22:13
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 07:55:39
 * @Description: 
 * @FilePath: /reserve_master/src/components/Day.js
 * @GitHub: https://github.com/liuyuchen777
 */

function Day(props) {
    return (
        <div>
            <button onClick={props.onFlod} className='btn btn-block'>{props.day+'('+props.yobi+')'}</button>
        </div>
    )
}

export default Day
