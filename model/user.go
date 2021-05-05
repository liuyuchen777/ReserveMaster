/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-05 00:48:58
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 01:58:24
 * @Description:
 * @FilePath: /reserve_master/model/user.go
 * @GitHub: https://github.com/liuyuchen777
 */
package model

type User struct {
	Username string `json:"username"`
	Id       int    `json:"id"`
	Password string `json:"password"`
}

func NewUser(username string, password string, id int) *User {
	return &User{
		Username: username,
		Password: password,
		Id:       id,
	}
}

// validate password
// input: username, password
// return: id