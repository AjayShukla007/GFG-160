package main

import (
	"fmt"
)

func secondMax(arr []int) int {
	if len(arr) < 2 {
		return arr[0]
	}
	max := 0
	secMax := 0

	for i := 0; i < len(arr); i++ {
		if arr[i] > max {
			secMax = max
			max = arr[i]
		} else if arr[i] < max && arr[i] > secMax {
			secMax = arr[i]
		}
	}

	return secMax
}

// moveZeroToEnd moves all non-zero elements to the front of the array while maintaining their relative order
// and pushes all zeros to the end. It works by:
// 1. Using a 'count' variable to keep track of where the next non-zero element should be placed
// 2. Iterating through the array, when a non-zero element is found, it is swapped with the element at 'count'
// 3. Incrementing 'count' after each swap to maintain the order of non-zero elements
func moveZeroToEnd(arr []int) []int {
	count := 0
	for i := 0; i < len(arr); i++ {
		if arr[i] != 0 {
			arr[count], arr[i] = arr[i], arr[count]
			count++
		}
	}
	return arr
}
func reverseArr(arr []int) []int {
	if len(arr) < 2 {
		return arr
	}
	end := len(arr) - 1
	for i := 0; i < end; i++ {
		arr[i], arr[end] = arr[end], arr[i]
		end--
	}
	return arr
}
func main() {
	// fmt.Println(secondMax([]int{12, 35, 1, 10, 34, 1}))
	// arr := []int{1, 2, 0, 4, 3, 0, 5, 0}
	// fmt.Println(moveZeroToEnd(arr))
	arr2 := []int{1, 4, 3, 2, 6, 5}
	fmt.Println(reverseArr(arr2))
}
