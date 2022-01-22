// Write your tests here!

const expect = require("chai").expect;
const {toLetter} = require("../src/polybius");
const {toNumber} = require("../src/polybius");
const {polybius} = require("../src/polybius");

describe("toLetter() polybius", () => {
    it("should return letter from polybius", () => {
        expect(toLetter(3, 2)).to.equal("h");
        expect(toLetter(4, 5)).to.equal("y");
    });

    it("42 on polybius should be i/j", () => {
        expect(toLetter(4, 2)).to.equal("i/j");
    });
});

describe("toNumber() polybius", () => {
    it("should return number from polybius", () => {
        expect(toNumber("h")).to.equal("32");
        expect(toNumber("y")).to.equal("45");
    });

    it("should return i and j as 42", () => {
        expect(toNumber("i")).to.equal("42");
        expect(toNumber("j")).to.equal("42");
    })
});

describe("polybius()", () => {
    it("should return encoded message", () => {
        expect(polybius("thinkful")).to.equal("4432423352125413");
    });

    it("should return decoded message", () => {
        expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
    })

    it("should translate 42 into i/j", () => {
        expect(polybius("42", false)).to.be.equal("i/j");
    });

    it("should translate i and j into 42", () => {
        expect(polybius("i")).to.be.equal("42");
        expect(polybius("j")).to.be.equal("42");
    });

    it("should ignore capital letters", () => {
        expect(polybius("HELLO WORLD")).to.be.equal(polybius("hello world"));
    });

    it("should maintain spaces", () => {
        expect(polybius("Hello world")).to.be.equal("3251131343 2543241341");
    })
});