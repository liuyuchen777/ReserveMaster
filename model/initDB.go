/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-05 00:52:34
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 03:24:07
 * @Description:
 * @FilePath: /reserve_master/model/initDB.go
 * @GitHub: https://github.com/liuyuchen777
 */
package model

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var client *mongo.Client
var ctx context.Context

func ConnectDB() {
	// set connect option
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")

	ctx = context.TODO()
	// connect mongodb
	var err error
	client, err = mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}

	// check connection
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Connected to MongoDB!")
}

func Close() {
	fmt.Println("Close MongoDB!")
	if err := client.Disconnect(ctx); err != nil {
		log.Fatal(err)
	}
}

func IntiDB() {
	ConnectDB()
	// drop database of exist
	if err := client.Database("equipment").Drop(ctx); err != nil {
		log.Fatal(err)
	}
	// open collection
	collectionUser := client.Database("equipment").Collection("user")
	collectionEquipment := client.Database("equipment").Collection("equipment")
	fmt.Println("start to init db...")
	// create data
	u1 := NewUser("liuyuchen", "123456", 7)
	u2 := NewUser("zhujunyi", "123456", 8)
	e1 := NewEquipment("Atomic Emission Spectronmeter")
	e2 := NewEquipment("Gas Chromatograph")
	e3 := NewEquipment("Size Exclusion Chromatograph")
	// insert data
	users := []interface{}{*u1, *u2}
	insertManyResult1, err := collectionUser.InsertMany(ctx, users)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Inserted Users Success: ", insertManyResult1.InsertedIDs)
	equipments := []interface{}{*e1, *e2, *e3}
	insertManyResult2, err := collectionEquipment.InsertMany(ctx, equipments)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("Inserted Equipment Success: ", insertManyResult2.InsertedIDs)
}
