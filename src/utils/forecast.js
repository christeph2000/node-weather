const request = require('request')


const forecast = (lat, long, callback) => {


    const url = 'http://api.weatherstack.com/current?access_key=1902d8bbf0f3abd884c4c43f5ad781f1&query=' + long + ',' + lat + '&units=f'
    console.log(url)

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unale to connect to weather service", undefined)
        }
        else if (body.error) {
            callback("Unable to find locations", undefined)
        }


        else {
            callback(undefined, {
                foreCastData: "It is " + body.current.temperature + " Degrees"
            })
        }


    }
    )

}

module.exports = forecast;