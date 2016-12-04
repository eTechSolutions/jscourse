var assert = require('assert')

describe("Chapter 2: Expression and operators", function() {
    var exercise = require('./exercise')

    describe("Assignment", function() {
        it("Use Assignment", function() {
            assert(exercise.assignment === "test", "You have not assigned the value correctly")
        })
    })

    describe("Comparison", function() {
        it("Greater than used correctly", function() {
            assert(exercise.isGreater === true, "Greater than must be used, remember the crocodile eats the biggest value")
        })

        it("less than used correctly", function() {
            assert(exercise.isLess === false, "Less than must be used, the crocodile eats the biggest value")
        })

        it("equals used correctly", function() {
            assert(exercise.equals === true, "kind of like assignment but more!")
        })

        it("strict equals used correctly", function() {
            assert(exercise.strictEquals === false, "You might have to do more than normal")
        })
    })

    describe("Logical", function() {

        it("Correct use of &&", function() {
            assert(exercise.shouldBeTrue === true, "This operator will be true if both sides are true")
            assert(exercise.shouldBeFalse === false,"This operator will be true if both sides are true")
        })

        it("Correct use of ||", function() {
            assert(exercise.shouldBeTrue2 === true, "this operator will be true if one side is true")
            assert(exercise.shouldBeFalse2 === false, "this operator will be true if one side is true")
        })

        it("Correct use of || on other values", function() {
            assert(exercise.object === {}, "This operator will take the first value which is true")
        })

        it("Correct use of && on other values", function() {
            assert(exercise.object2 === undefined, "This operator will return the first value which is false or the right side if left side is true")
        })

        it("Correct use of Not operator", function() {
            assert(exercise.falseValue === false, "Some puncuation might be needed before this")
        })
    })


    describe("Conditional", function() {

        it("correct use of conditional", function() {
            assert(exercise.objectConditional === {}, "Right side means if true, left side means if false")
        })
    })

    describe("typeof", function() {

        it("typeof object", function() {
            assert(exercise.isObject === true, "Are you checking the type correctly?")
        })

        it("typeof boolean", function() {
            assert(exercise.isBoolean === true, "Are you checking the type correctly?")
        })

        it("typeof string", function() {
            assert(exercise.isString === true, "Are you checking the type correctly?")
        })
    })
})
