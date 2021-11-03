const express=require("express")
const app=express()
const Article=require("./models/article")
const articlerouter=require('./routes/articles')
const mongnoose=require("mongoose")
app.use(express.urlencoded({extended:false}))
mongnoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blog',{useNewUrlParser:true, useUnifiedTopology:true})
app.set('view engine','ejs')
app.use('/articles',articlerouter)

const port=process.env.PORT||400


app.get("/",async(req,res)=>{
	const articles=await Article.find().sort({createdAt:'desc'})
	res.render("articles/index",{articles:articles})
})

app.listen(port)

