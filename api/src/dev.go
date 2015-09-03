package main

type Dev struct {
	Id        int       `json:"id"`
	Username  string    `json:"username"`
	Price 	  float64   `json:"price"`
}

type Devs []Dev
