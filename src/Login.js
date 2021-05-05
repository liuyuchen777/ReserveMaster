/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 10:10:36
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 07:29:08
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
        // judge whether the password is correct
        let status = props.loginFun(username, password)
        if (status === -1) {
            // no input username in database
            props.changeInfo("NO SUCH USER!")
            props.history.push('/fail')
        } else if (status === 0) {
            // password error
            props.changeInfo("ERROR PASSWORD!")
            props.history.push('/fail')
        } else {
            console.log("Login Successful! ", status)
            props.changeInfo("LOGIN SUCCESSFUL")
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
