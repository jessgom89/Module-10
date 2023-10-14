const {Circle,Square,Triangle}=require("./lib/shapes")
const inquirer=require("inquirer")
const fs=require("fs")

inquirer.prompt ([{
    type:'input',
    name:'text',
    message:'what is the svg logo text?',
},{
    type:'input',
    name:'textColor',
    message:'what is the text color?',
},{
    type:'list',
    name: 'shape',
    message:'what is the shape?',
    choices:['Circle','Square','Triangle']
},{
    type:'input',
    name:'shapeColor',
    message:'what is the shapeColor?',
}])
.then(response=>{
    if(response.shape==="Circle"){
        const circle=new Circle(response.text,response.textColor,response.shapeColor)
    }
})

