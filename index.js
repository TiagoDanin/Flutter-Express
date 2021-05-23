
const express = require('express')
const helmet = require('helmet')
const path = require('path')

const app = express()
const port = process.env.PORT || 8000

app.use(helmet.dnsPrefetchControl())
app.use(helmet.hidePoweredBy())
app.use(helmet.permittedCrossDomainPolicies())
app.use(helmet.xssFilter())

app.set('trust proxy', 1)

app.use('/', express.static(path.join(__dirname, 'build/web')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
