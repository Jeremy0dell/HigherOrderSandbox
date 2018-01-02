const express = require('express')
const path = require('path')

const app = express()

app.use('/public', express.static(path.join(__dirname, '../public/')))

var myLogger = function (req, res, next) {
  console.log('LOGGED', __dirname)
  next()
}

app.use(myLogger)

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})


app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
