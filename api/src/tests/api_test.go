package main

import(
    "fmt"
    "io"
    "net/http"
    "net/http/httptest"
    "strings"
    "testing"
)

var(
    server *httptest.Server
    reader io.Reader
    usersUrl string
)

func init(){
    router := NewRouter()
    server = httptest.NewServer(router)
    
}


func TestCreateDev(t *testing.T) {
    userJson := `{"username": "dennis", "price": 200}`
    reader = strings.NewReader(userJson)

    usersUrl = fmt.Sprintf("%s/devs", server.URL)
    request, err := http.NewRequest("POST", usersUrl, reader)

    res, err := http.DefaultClient.Do(request)

    if err != nil {
        t.Error(err)
    }

    if res.StatusCode != 201 {
        t.Errorf("Success expected: %d", res.StatusCode)
    }
}

func TestShowDev(t *testing.T) {
    userJson := `{"username": "dennis", "price": 200}`
    reader = strings.NewReader(userJson)

    usersUrl = fmt.Sprintf("%s/devs/1", server.URL)
    request, err := http.NewRequest("GET", usersUrl, reader)

    res, err := http.DefaultClient.Do(request)

    if err != nil {
        t.Error(err)
    }

    if res.StatusCode != http.StatusOK {
        t.Errorf("Success expected: %d", res.StatusCode)
    }
}

func TestDevs(t *testing.T) {
    userJson := `{"username": "dennis", "price": 200}`
    reader = strings.NewReader(userJson)

    usersUrl = fmt.Sprintf("%s/devs", server.URL)
    request, err := http.NewRequest("GET", usersUrl, reader)

    res, err := http.DefaultClient.Do(request)

    if err != nil {
        t.Error(err)
    }

    if res.StatusCode != http.StatusOK {
        t.Errorf("Success expected: %d", res.StatusCode)
    }
}