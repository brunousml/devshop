package main

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

func Index(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Welcome!\n")
}

func DevIndex(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(w).Encode(devs); err != nil {
		panic(err)
	}
}

func DevShow(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	var devId int
	var err error
	
	if devId, err = strconv.Atoi(vars["devId"]); err != nil {
		panic(err)
	}

	dev := RepoFindDev(devId)
	if dev.Id > 0 {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(http.StatusOK)
		
		if err := json.NewEncoder(w).Encode(dev); err != nil {
			panic(err)
		}
		return
	}

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusNotFound)
	if err := json.NewEncoder(w).Encode(jsonErr{Code: http.StatusNotFound, Text: "Not Found"}); err != nil {
		panic(err)
	}

}

func DevCreate(w http.ResponseWriter, r *http.Request) {
	var dev Dev
	body, err := ioutil.ReadAll(io.LimitReader(r.Body, 1048576))
	
	if err != nil {
		panic(err)
	}
	
	if err := r.Body.Close(); err != nil {
		panic(err)
	}
	
	if err := json.Unmarshal(body, &dev); err != nil {
		w.Header().Set("Content-Type", "application/json; charset=UTF-8")
		w.WriteHeader(422)
		
		if err := json.NewEncoder(w).Encode(err); err != nil {
			panic(err)
		}
	}

	d := RepoCreateDev(dev)
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusCreated)
	
	if err := json.NewEncoder(w).Encode(d); err != nil {
		panic(err)
	}
}
