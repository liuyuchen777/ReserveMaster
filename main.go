/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-01 23:56:37
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 01:54:33
 * @Description:
 * @FilePath: /reserve_master/main.go
 * @GitHub: https://github.com/liuyuchen777
 */
package main

import "reserve_master/model"

func main() {
	// model.IntiDB()
	// router := gin.Default()

	// router.Run(":9090")
	model.ConnectDB()
	name := "Size Exclusion Chromatograph"
	var appoint [3][7][8]int
	for i := 0; i < 3; i++ {
		for j := 0; j < 7; j++ {
			for k := 0; k < 8; k++ {
				appoint[i][j][k] = 7
			}
		}
	}
	model.UpdateAppoint(name, appoint)
	model.Close()
}
