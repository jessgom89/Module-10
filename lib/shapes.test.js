const { describe } = require("node:test")
const { Circle, Square, Triangle } = require("./shapes")
const { exhaustAll } = require("rxjs")
describe("shape", () => {
    describe("circle", () => {
        const circle = new Circle("svg", "yellow", "pink")
        test("text", () => {
            expect(circle.text).toEqual("svg")

        })
        test("textColor", () => {
            expect(circle.textColor).toEqual("yellow")

        })
        test("shapeColor", () => {
            expect(circle.shapeColor).toEqual("pink")

        })
        test("render", () => {
            expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`)
        })
    })
    describe("square", () => {
        const square = new Square("svg", "yellow", "pink")
        test("text", () => {
            expect(square.text).toEqual("svg")

        })
        test("textColor", () => {
            expect(square.textColor).toEqual("yellow")



        })
        test("shapeColor", () => {
            expect(square.shapeColor).toEqual("pink")
        })
        test("render", () => {
            expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="300" height="200" stroke="black" fill="${square.shapeColor}" stroke-width="5"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text> </svg>`)

        })








    })

    describe("triangle", () => {
        const triangle = new Triangle("svg", "yellow", "pink")
        test("text", () => {
            expect(triangle.text).toEqual("svg")

        })
        test("textColor", () => {
            expect(triangle.textColor).toEqual("yellow")

        })
        test("shapeColor", () => {
            expect(triangle.shapeColor).toEqual("pink")


        })
        test("render", () => {
            expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`)
        })
    })
})

