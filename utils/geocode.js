const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.weatherapi.com/v1/current.json?key=f41cce3b14f64383972103043231512&q=' + encodeURIComponent(address)

    request({ url, json: true }, (error, {body} = {} ) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        }
        else if (body.error) {
            callback('Unable to find location, Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.location.lat,
                longitude: body.location.lon,
                location: body.location.name + ', ' + body.location.region + ', ' + body.location.country
            })
        }
    })
}

module.exports = geocode