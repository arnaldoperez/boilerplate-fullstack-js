import Express from "express";
import prisma from "../../prisma/client.js";


const app=Express()

app.use(Express.json())

app.get("/", (req,res)=>res.status(200).send({message:"Hello World"}))
app.get("/posts",async (req,res)=>{
  // include:{author:true} hace que se consulte la información del usuario
  // relacionado con el post mediante el author id
  const posts=await prisma.post.findMany({include:{author:true}})

  return res.status(200).send(posts)
})

export default app