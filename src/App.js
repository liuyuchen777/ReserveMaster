/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 06:48:18
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 12:03:41
 * @Description: 
 * @FilePath: /reserve_master/src/App.js
 * @GitHub: https://github.com/liuyuchen777
 */

import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About'
import Header from './components/Header'
import Day from './components/Day'
import Equipments from './components/Equipments'
import React from 'react'
import Submit from './components/Submit'
import Login from './Login'
import LoginFail from './LoginFail'
import Logout from './components/Logout'

/*
 * Equipment Status:
 * -1: no user selecte (white)
 * positive number (not user): other user selected) (gray with name under time)
 * user: this user selected (blue) 
 */

class Eqp {
  constructor(name) {
    this.name = name
    this.Appoint = new Array(7)
    for (let i = 0; i < this.Appoint.length; i++) {
      this.Appoint[i] = new Array(8).fill(-1)
    }
    // some test change
    this.Appoint[2][2] = 8
  }

  getName() {
    return this.name
  }

  getState(day, time) {
    return this.Appoint[day][time]
  }

  changeAppoint(day, time, people) {
    this.Appoint[day][time] = people
    console.log(this.Appoint)
  }
}

class User {
  constructor(name, id, password) {
    this.name = name
    this.id = id
    this.password = password
  }

  getPasswd() {
    return this.password
  }

  getName() {
    return this.name
  }

  getID() {
    return this.id
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFlod: new Array(7).fill(false),
      user: -1,
      login_info: "Hello, Stranger!"
    }
    this.date = ['2020/04/26', '2020/04/27', '2020/04/28', '2020/04/29', '2020/04/30', '2020/05/01', '2020/05/02']
    this.week = ['月', '火', '水', '木', '金', '土', '日']
    this.equipment_list = [new Eqp("Atomic Emission Spectronmeter"), new Eqp("Gas Chromatograph"), new Eqp("Size Exclusion Chromatograph")]
    // current user id
    // all user
    this.allUser = [new User("liuyuchen", 7, "123456"), new User("zhujunyi", 8, "123456")]
  }

  render() {
    const numbers = [0, 1, 2, 3, 4, 5, 6]
    const listItems = numbers.map((number) => 
      <div>
        <Day onFlod={() => {
          let temp = this.state.showFlod
          temp[number] = !temp[number]
          this.setState({showFlod: temp})
        }} day={this.date[number]} yobi={this.week[number]}/>

        {this.state.showFlod[number] ? <Equipments login_info={this.state.login_info} el={this.equipment_list} day={number} user={this.state.user} allUser={this.allUser}/> : ''}
      </div>      
    )

    return (
      <Router>
        <div className="container">
          <Header />
          <Route path='/' exact render={() => (
            <div>
              <Login changeUser={(data) => this.setState({user: data})} allUser={this.allUser} changeInfo={(data) => this.setState({login_info: data})} />
            </div>
          )} />
          <Route path='/main' exact render={() => (
            <div>
              <ul>{listItems}</ul>
              <div>
                <center>
                <Submit />
                <Logout changeUser={(data) => this.setState({user: data})} changeInfo={(data) => this.setState({login_info: data})}/>
                </center>
              </div>
            </div>
            // submit buttom
          )} />
          <Route path='/fail' exact render={() => (
            <div>
              <LoginFail login_info={this.state.login_info}/>
            </div>
          )} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </Router>
  );
  }
}

export default App;
