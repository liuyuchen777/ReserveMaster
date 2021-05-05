/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-05 02:29:32
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 05:39:21
 * @Description:
 * @FilePath: /reserve_master/controller/controller.go
 * @GitHub: https://github.com/liuyuchen777
 */
package controller

import (
	"fmt"
	"log"
	"net/http"
	"reserve_master/model"

	"github.com/gin-gonic/gin"
)

type LoginInfo struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func IndexHandler(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", nil)
}

// handle login button click
func LoginHandler(c *gin.Context) {
	var info LoginInfo
	err := c.BindJSON(&info)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(info)
	id := model.ValidateLogin(info.Username, info.Password)
	c.JSON(http.StatusOK, gin.H{
		"id": id,
	})
}

func GetHandler(c *gin.Context) {
	equipments := model.AllEquipment()
	users := model.AllUser()
	c.JSON(http.StatusOK, gin.H{
		"users":      users,
		"equipments": equipments,
	})
}

// handle submit
func SubmitHandler(c *gin.Context) {
	var equipments []model.Equipment
	c.BindJSON(&equipments)
	for _, v := range equipments {
		model.UpdateAppoint(v.Name, v.Appoint)
	}
	c.JSON(http.StatusOK, gin.H{
		"status": "ok",
	})
}
