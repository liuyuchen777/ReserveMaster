/*
 * @Author: Liu Yuchen
 * @Date: 2021-05-05 08:12:25
 * @LastEditors: Liu Yuchen
 * @LastEditTime: 2021-05-05 08:23:00
 * @Description:
 * @FilePath: /reserve_master/test/quick_test.go
 * @GitHub: https://github.com/liuyuchen777
 */
package test

import (
	"fmt"
	"testing"

	"github.com/robfig/cron"
)

func TestCron(t *testing.T) {
	fmt.Println("Hello World!")

	c := cron.New()
	c.AddFunc("*/3 * * * * *", func() {
		fmt.Println("every 3 seconds executing")
	})

	go c.Start()
	defer c.Stop()

	for ; true; {
		
	}
}
