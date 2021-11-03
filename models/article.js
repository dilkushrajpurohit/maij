const mongnoose=require("mongoose")
const articleSchema=new mongnoose.Schema({
title:{	type:String,
	required:true
},
description:{	type:String
},
markdown:{	type:String,
	required:true
},
createAt:{
	type:Date,
	default: Date.now
}
})
module.exports=mongnoose.model('Article',articleSchema)