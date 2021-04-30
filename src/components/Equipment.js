/*
 * @Author: Liu Yuchen
 * @Date: 2021-04-30 07:29:14
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-04-30 14:45:25
 * @Description: 
 * @FilePath: /reserve_master/src/components/Equipment.js
 * @GitHub: https://github.com/liuyuchen777
 */
import {React, Component} from 'react'
import Button from './Button'

class Equipment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateList: props.item.Appoint[props.day].slice(0, 8),
        };
        
        this.timeList = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']
    }

    render() {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
        const listItems = numbers.map((number) => 
            <Button onClick={() => {
                if (this.state.stateList[number] === -1) {
                    let temp = this.state.stateList
                    temp[number] = this.props.user
                    this.setState({
                        stateList: temp
                    })
                    this.props.item.changeAppoint(this.props.day, number, this.props.user)
                } else {
                    let temp = this.state.stateList
                    temp[number] = -1
                    this.setState({
                        stateList: temp
                    })
                    this.props.item.changeAppoint(this.props.day, number, -1)
                }
            }} text ={this.timeList[number]} color={this.state.stateList[number]!==-1 ? 'rgb(134, 184, 224)' : 'white'} />
        )

        // console.log(this.props.item)

        return (
            <div>
                <button className="btn3">{this.props.item.getName()}</button>
                &emsp;
                {listItems[0]}
                {listItems[1]}
                {listItems[2]}
                {listItems[3]}
                {listItems[4]}
                {listItems[5]}
                {listItems[6]}
                {listItems[7]}
            </div>
        )
    }
}

// function Equipment(props) {
//     // console.log(props.item)
//     let state = Array[8]
//     let setState = Array[8]
    
//     const [state[0], setState[0]] = useState(
//         props.item.getState(props.day, 0)
//     )

//     const timeList = ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']

//     return (
//         <div>
//             <button className="btn3">{props.item.getName()}</button>
//             &emsp;
//             <Button onClick={() => {
//                 if (state1 === -1) {
//                     setState1(0)
//                     props.item.changeAppoint(props.day, 0, 0)
//                 } else {
//                     setState1(-1)
//                     props.item.changeAppoint(props.day, 0, -1)
//                 }
//             }} text ={timeList[0]} color={state1!==-1 ? 'rgb(134, 184, 224)' : 'white'} />
//         </div>
//     )
// }

export default Equipment