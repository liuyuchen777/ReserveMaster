/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-05 00:48:58
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 08:05:11
 * @Description:
 * @FilePath: /reserve_master/model/user.go
 * @GitHub: https://github.com/liuyuchen777
 */
package model

import (
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	Username string `json:"username"`
	Id       int    `json:"id"`
	Password string `json:"password"`
}

type UserInfo struct {
	Username string
	Id       int
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
func ValidateLogin(username, password string) int {
	/*
	 * -1 -> no such user
	 * 0 -> password incorrect
	 */
	collectionUser := client.Database("equipment").Collection("user")
	// create filter
	filter := bson.D{{"username", username}}
	var result User
	if err := collectionUser.FindOne(ctx, filter).Decode(&result); err != nil {
		fmt.Println("I am here! ", username, password)
		return -1
	}
	if result.Password == password {
		return result.Id
	} else {
		return 0
	}
}

func AllUser() []UserInfo {
	var result []UserInfo
	findOptions := options.Find()
	collectionUser := client.Database("equipment").Collection("user")

	curr, err := collectionUser.Find(ctx, bson.D{{}}, findOptions)
	if err != nil {
		log.Fatal(err)
	}

	//decode and append result
	for curr.Next(ctx) {
		var item User
		if err := curr.Decode(&item); err != nil {
			log.Fatal(err)
		}
		result = append(result, UserInfo{item.Username, item.Id})
	}

	curr.Close(ctx)
	// fmt.Printf("Found multiple documents (array of pointers): %#v\n", result)

	return result
}

// add user
func AddUser(username, password string, id int) error {
	newUser := NewUser(username, password, id)
	insertResult, err := client.Database("equipment").Collection("user").InsertOne(ctx, newUser)
	fmt.Println("Inserted a single document: ", insertResult.InsertedID)
	
	return err
}
