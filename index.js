/*
 * @Author: cly-dev 2663118046@qq.com
 * @Date: 2023-08-10 23:21:51
 * @Description: 
 */
const express=require("express");
const app=express();

app.use("/",(req,res)=>{
    
    res.status(200).send("你好")
})


app.listen(process.env.part,()=>{
    console.log("服务器启动成功")
})