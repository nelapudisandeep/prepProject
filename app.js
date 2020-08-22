const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT||3000

app.listen(port,()=>console.log('Starting on port : ',port))

app.use(cors())
app.use(express.static('./public'))


app.get('/',(req,res)=>{
	res.send('this is a sample statement!')
})

