/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-05 02:25:49
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 05:50:52
 * @Description:
 * @FilePath: /reserve_master/router/router.go
 * @GitHub: https://github.com/liuyuchen777
 */
package router

import (
	"reserve_master/controller"

	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// load static files
	r.Static("/static", "./build/static")
	// load html file
	r.LoadHTMLGlob("./build/index.html")

	r.GET("/", controller.IndexHandler)
	r.GET("/main", controller.IndexHandler)
	r.GET("/About", controller.IndexHandler)

	v1Group := r.Group("v1")
	{
		// login
		v1Group.POST("/login", controller.LoginHandler)
		// submit change
		v1Group.POST("/main", controller.SubmitHandler)
		// get all appointmne
		v1Group.GET("/data", controller.GetHandler)
	}

	return r
}
