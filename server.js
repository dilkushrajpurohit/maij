const express=require("express")
const app=express()
const Article=require("./models/article")
const articlerouter=require('./routes/articles')
const mongoose=require("mongoose")
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use('/articles',articlerouter)

const port=process.env.PORT||400
mongoose
     .connect( process.env.MONGODB_URI, { useNewUrlParser: true,  useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

app.get("/",async(req,res)=>{
	const articles=await Article.find().sort({createdAt:'desc'})
	res.render("articles/index",{articles:articles})
})

app.listen(port)

