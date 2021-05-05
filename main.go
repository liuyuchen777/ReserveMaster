/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 23:56:37
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 03:15:58
 * @Description:
 * @FilePath: /reserve_master/main.go
 * @GitHub: https://github.com/liuyuchen777
 */
package main

import (
	"fmt"
	"reserve_master/model"
	"reserve_master/router"
)

func main() {
	model.ConnectDB()

	result := model.AllEquipment()

	for _, v := range result {
		fmt.Println(v.Name)
	}

	r := router.SetupRouter()

	r.Run(":9090")

	model.Close()
}
