const express = require('express')
const colors  = require('@colors/colors')
const morgan  = require('morgan')
const routes  = require('./routes')

const app = express()
const port = 3000

//Setings
app.set('appName','First App Express')
app.set('appViews', __dirname + '/views')

//Middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use((req, res, next) => {
    console.log(`📌 ${req.method} ${req.url}`)
    next()
})

//Basic routing
app.use(routes)

app.listen(port, () => {
    console.log(app.get('appViews'))
    console.log('--------------------------'.underline.red) // outputs red underlined text
    console.log('NodeJs & Express - '+ app.get('appName').rainbow)
    console.log(`server on port ${port}`.rainbow)
    console.log('--------------------------'.underline.red) // 
})