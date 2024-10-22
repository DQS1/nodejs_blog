import express from 'express'
import { engine } from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'

const app = express()
const port = 3000

const __dirname = path
  .dirname(new URL(import.meta.url).pathname)
  .replace(/^\/+/, '')

app.use(express.static(path.join(__dirname, 'public')))

//HTTP logger
app.use(morgan('dev'))

//Template engine
app.engine('hbs', engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/tin-tuc', (req, res) => {
  res.render('tin-tuc')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
