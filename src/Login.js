/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 10:10:36
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 12:08:58
 * @Description: 
 * @FilePath: /reserve_master/src/Login.js
 * @GitHub: https://github.com/liuyuchen777
 */
import { useState } from 'react'
import { withRouter } from 'react-router-dom'

function Login(props) {
    // console.log(props.user)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log("Click Submit Button!")

        // judge whether the password is correct
        console.log(username)
        const aUser = props.allUser.find(element => element.getName() === username)
        if (aUser === undefined) {
            // no input username in database
            props.changeInfo("NO SUCH USER!")
            props.history.push('/fail')
        } else if (aUser.getPasswd() !== password) {
            // password error
            props.changeInfo("ERROR PASSWORD!")
            props.history.push('/fail')
        } else {
            // login successful
            let num = aUser.getID()
            console.log(num)
            props.changeInfo("LOGIN SUCCESSFUL")
            props.changeUser(num)
            props.history.push('/main')
        }
        
    
        // final work
        setPassword('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
            <h2>Username: </h2>
            <input type='text' placeholder='username' 
            value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className='form-control'>
            <h2>Password: </h2>
            <input type='password' placeholder='password' 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <input type='submit' value='Login' className='btn4'/>
        </form>
    )
}

export default withRouter(Login)
