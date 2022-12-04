const express = require('express')

const github = require('github-profile')


const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { profile: '' })
})

app.post('/getinfo', (req, res) => {

    github(req.body.email)
        .then((profile) => {
            console.log(profile)
            res.render('index', { profile: profile })
        })

})

app.listen(5000, () => {
    console.log("App is listening on port 5000")
})