const request = require('request')




const url = 'http://api.weatherstack.com/current?access_key=1902d8bbf0f3abd884c4c43f5ad781f1&query=40.7831,-73.9712'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(response.body)
    }
    else if (response.body.error) {
        console.log(response.body)
    }


    else {
        console.log(response.body)
    }
}
)