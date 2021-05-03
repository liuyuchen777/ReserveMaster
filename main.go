/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 23:56:37
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-01 23:59:00
 * @Description:
 * @FilePath: /reserve_master/main.go
 * @GitHub: https://github.com/liuyuchen777
 */
package main

import "github.com/gin-gonic/gin"

func main() {
	router := gin.Default()

	router.Run(":9090")
}
