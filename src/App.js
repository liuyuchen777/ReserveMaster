/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 06:48:18
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 14:48:02
 * @Description: 
 * @FilePath: /reserve_master/src/App.js
 * @GitHub: https://github.com/liuyuchen777
 */

import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Day from './components/Day'
import Equipments from './components/Equipments'
import React from 'react'
import Submit from './components/Submit'

class Eqp {
  constructor(name) {
    this.name = name
    this.Appoint = new Array(7)
    for (let i = 0; i < this.Appoint.length; i++) {
      this.Appoint[i] = new Array(8).fill(-1)
    }
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

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFlod: new Array(7).fill(false)
    }
    this.date = ['2020/04/26', '2020/04/27', '2020/04/28', '2020/04/29', '2020/04/30', '2020/05/01', '2020/05/02']
    this.week = ['月', '火', '水', '木', '金', '土', '日']
    this.equipment_list = [new Eqp("computer1"), new Eqp("computer2"), new Eqp("computer3")]
    this.user = 4
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

        {this.state.showFlod[number] ? <Equipments el={this.equipment_list} day={number} user={this.user}/> : ''}
      </div>      
    )

    return (
      <Router>
        <div className="container">
          <Header />
          <Route path='/' exact render={(props) => (
            <div>
              <ul>{listItems}</ul>
              <Submit />
            </div>
            // submit buttom
          )}/>
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </Router>
  );
  }
}

export default App;
