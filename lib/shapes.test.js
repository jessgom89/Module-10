const { describe } = require("node:test")
const {Circle,Square,Triangle}=require("./shapes")
describe("shape",()=>{
    describe("circle",()=>{
    const circle=new Circle("svg")    
     test ("text",()=>{
        expect (circle.text).toEqual("svg")

     })   
    })
    describe("square",()=>{

    })
    describe("triangle",()=>{

    })
})