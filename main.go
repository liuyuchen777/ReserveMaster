/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 23:56:37
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 08:36:12
 * @Description:
 * @FilePath: /reserve_master/main.go
 * @GitHub: https://github.com/liuyuchen777
 */
package main

import (
	"fmt"
	"reserve_master/model"
	"reserve_master/router"

	"github.com/robfig/cron"
)

func main() {
	model.ConnectDB()

	result := model.AllEquipment()

	for _, v := range result {
		fmt.Println(v.Name)
	}

	r := router.SetupRouter()

	// 在每个周的周天执行以下函数
	c := cron.New()
	timeCircle := "0 0 0 * * 1" // Run once a week, midnight between Sun/Mon
	c.AddFunc(timeCircle, model.AppointmentChange)
	go c.Start()
	defer c.Stop()

	r.Run(":9090")

	model.Close()
}
