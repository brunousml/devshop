package main

import "fmt"

var currentId int

var devs Devs

func init() {
	RepoCreateDev(Dev{Username: "josh", photo: "",  Price: 100})
	RepoCreateDev(Dev{Username: "andy", Price: 120})
	RepoCreateDev(Dev{Username: "adrian", Price: 80})
	RepoCreateDev(Dev{Username: "brian", Price: 50})
	RepoCreateDev(Dev{Username: "munos", Price: 90})

}

func RepoFindDev(id int) Dev {
	for _, d := range devs {
		if d.Id == id {
			return d
		}
	}
	return Dev{}
}

func RepoCreateDev(d Dev) Dev {
	currentId += 1
	d.Id = currentId
	devs = append(devs, d)
	return d
}

func RepoDestroyDev(id int) error {
	for i, d := range devs {
		if d.Id == id {
			devs = append(devs[:i], devs[i+1:]...)
			return nil
		}
	}
	return fmt.Errorf("Could not find Dev with id of %d to delete", id)
}
