// Write your tests here!

const expect = require("chai").expect;
const {letterShift} = require("../src/caesar");
const {caesar} = require("../src/caesar")

describe("letterShift() caesar", () => {
    it("should letter shift to the right", () => {
        expect(letterShift('a', 3)).to.equal('d');
        expect(letterShift('z', 3)).to.equal('c');
    });

    it("should letter shift to the left", () => {
        expect(letterShift('a', -3)).to.equal('x');
        expect(letterShift('z', -3)).to.equal('w');
    });
});

describe("caesar()", () => {
    it("should return encoded message", () => {
        expect(caesar("hello", 3)).to.equal("khoor");
        expect(caesar("encoded", -10)).to.equal("udsetut");
        expect(caesar("xylophone!", 5)).to.equal("cdqtumtsj!");
    });
    
    it("should return decoded message", () => {
        expect(caesar("khoor", 3, false)).to.equal("hello");
        expect(caesar("udsetut", -10, false)).to.equal("encoded");
        expect(caesar("cdqtumtsj!", 5, false)).to.equal("xylophone!");
    });

    it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
        expect(caesar("hello", 0)).to.be.false;
        expect(caesar("hello", -26)).to.be.false;
        expect(caesar("hello", 26)).to.be.false;
        expect(caesar("hello")).to.be.false;
    });

    it("should ignore capital letters", () => {
        expect(caesar("Hello", 3)).to.be.equal(caesar("hello", 3));
        expect(caesar("THINKFUL", -10)).to.be.equal(caesar("thinkful", -10));
    });

    it("should maintain spaces", () => {
        expect(caesar("thinkful student", 3)).to.be.equal("wklqnixo vwxghqw");
        expect(caesar("this is a sentence", 3)).to.be.equal("wklv lv d vhqwhqfh");
    })
});