const path = require("path")
const hbs = require('hbs')
const express = require("express")
const request = require("request")
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express();
const publicDir = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(publicDir))
hbs.registerPartials(partialsPath)


app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Chris"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Chris"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: "This is the help page",
        title: "Help Page",
        name: "Chris"
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({ error: "Please provide an address" })
    }

    geoCode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({
                error
            })
        }
        console.log(latitude)

        forecast(latitude, longitude, (error, { foreCastData } = {}) => {
            if (error) {
                return res.send({
                    error
                })

            }
            res.send({
                location: location,
                foreCastData,
                address: req.query.address
            })
        })

    })
    // res.send({
    //     address: req.query.address,
    //     forecast: "It is snowing",
    //     location: "Kottayam"
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "Must provide a search term"
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        message: "Help Article",
        title: "404 Page",
        name: "Chris"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        message: "Page",
        title: "404 Page",
        name: "Chris"
    })
})
app.listen(3000, () => {
    console.log("Server is up in port 3000")
});