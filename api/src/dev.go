package main

type Dev struct {
	Id        int       `json:"id"`
	Username  string    `json:"username"`
	photo  	  string    `json:"photo"`
	Price 	  float64   `json:"price"`
}

type Devs []Dev
