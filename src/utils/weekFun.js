/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 23:04:59
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 23:27:56
 * @Description: 
 * @FilePath: /reserve_master/src/utils/weekFun.js
 * @GitHub: https://github.com/liuyuchen777
 */



function formatDate(date) {
    date = new Date(date)
    let myear = date.getFullYear()
    let mmonth = date.getMonth() + 1
    let mweekday = date.getDate()
    mmonth = mmonth < 10 ?  "0" + mmonth : mmonth
    mweekday = mweekday < 10 ?  "0" + mweekday : mweekday
    return `${myear}/${mmonth}/${mweekday}`;
}

export function getThisWeek() {
    let dateString = formatDate(new Date())
    let presentDate = new Date(dateString)
    let today = presentDate.getDay()!==0 ? presentDate.getDay() : 7

    return Array.from(new Array(7), (_, index) => {
        return formatDate(new Date(presentDate.getTime() - (today-index-1)*24*60*60*1000))
    })
}

export function getNextWeek() {
    let dateString = formatDate(new Date())
    let presentDate = new Date(dateString)
    let today = presentDate.getDay()!==0 ? presentDate.getDay() : 7

    return Array.from(new Array(7), (_, index) => {
        return formatDate(new Date(presentDate.getTime() - (today-index-1)*24*60*60*1000  + 7*24*60*60*1000))
    })
}

export function getNextNextWeek() {
    let dateString = formatDate(new Date())
    let presentDate = new Date(dateString)
    let today = presentDate.getDay()!==0 ? presentDate.getDay() : 7

    return Array.from(new Array(7), (_, index) => {
        return formatDate(new Date(presentDate.getTime() - (today-index-1)*24*60*60*1000+ 14*24*60*60*1000))
    })
}

// console.log(getThisWeek())
// console.log(getNextWeek())
// console.log(getNextNextWeek())