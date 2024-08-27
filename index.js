import express from 'express'
import bodyParser from 'body-parser'
import axios from 'axios'
import env from 'dotenv';

const app = express()
const port = 3000
env.config()

const API_URL = process.env.URL;
const yourBearerToken = process.env.TOKEN;
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
}
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
})
app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.get('/id', (req, res) => {
  res.render('character.ejs')
})

app.post('/about', async (req, res) => {
  const charac = req.body.id
  try {
    const response = await axios.get(API_URL + yourBearerToken + '/' + charac)
    res.render('about.ejs', { content: response.data })
  } catch (error) {
    res.render('about.ejs', { content: JSON.stringify(error.message) })
  }
})

app.get('/power', (req, res) => {
  res.render('power.ejs')
})

app.get("/",(req,res)=>{
  res.render('index.ejs')
})

app.post('/power', async (req, res) => {
  const charac = req.body.id
  try {
    const response = await axios.get(
      API_URL + yourBearerToken + '/' + charac + '/powerstats'
    )
    res.render('power.ejs', { content: response.data })
  } catch (error) {
    res.render('power.ejs', { content: JSON.stringify(error.message) })
  }
})

app.get('/appear', (req, res) => {
  res.render('appear.ejs')
})

app.post('/appear', async (req, res) => {
  const charac = req.body.id
  try {
    const response = await axios.get(API_URL + yourBearerToken + '/' + charac)
    res.render('appear.ejs', { content: response.data })
  } catch (error) {
    res.render('appear.ejs', { content: JSON.stringify(error.message) })
  }
})

app.get('/wc', (req, res) => {
  res.render('wc.ejs')
})

app.post('/wc', async (req, res) => {
  const charac = req.body.id
  try {
    const response = await axios.get(API_URL + yourBearerToken + '/' + charac)
    res.render('wc.ejs', { content: response.data })
  } catch (error) {
    res.render('wc.ejs', { content: JSON.stringify(error.message) })
  }
})

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`)
})
