
const request = require("request")
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY2hyaXN0ZXBoMjAwIiwiYSI6ImNsYzIyd28xMzB5cmUzd3A3c2U5NnhnbmMifQ.NqpMLslLzZAKDKzMIyCeoA&limit=1'

    request({
        url, json: true
    }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services", undefined)
        }
        else if (!body.features) {
            callback("Unable to find ldsfvocation", undefined)
        }
        else {
            console.log(body.features)
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })

        }

    })

}

module.exports = geoCode;