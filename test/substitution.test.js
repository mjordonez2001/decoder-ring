// Write your tests here!

const expect = require("chai").expect;
const {letterSub} = require("../src/substitution");
const {substitution} = require("../src/substitution");

describe("letterSub() substitution", () => {
    it("should substitute letters to new alphabet", () => {
        expect(letterSub("abcdefghijklmnopqrstuvwxyz","xoyqmcgrukswaflnthdjpzibev", "t")).to.equal("j");
        expect(letterSub("abcdefghijklmnopqrstuvwxyz", "$wae&zrdxtfcygvuhbijnokmpl", "e")).to.equal("&");
    });

    it("should substitue letters to regular alphabet", () => {
        expect(letterSub("xoyqmcgrukswaflnthdjpzibev", "abcdefghijklmnopqrstuvwxyz", "w")).to.equal("l");
        expect(letterSub("$wae&zrdxtfcygvuhbijnokmpl", "abcdefghijklmnopqrstuvwxyz", "y")).to.equal("m");
    });
});

describe("substitution()", () => {
    it("should substitue message into new alphabet", () => {
        expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal("jrufscpw");
        expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal("y&ii$r&");
    });

    it("should substitute message into regular alphabet", () => {
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal("thinkful");
        expect(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)).to.equal("message");
    });

    it("should return false if alphabet isn't 26 characters long", () => {
        expect(substitution("thinkful", "short")).to.be.false;
    });

    it("should return false if characters in the alphabet aren't unique", () => {
        expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
    });

    it("should maintain spaces", () => {
        expect(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")).to.be.equal("elp xhm xf mbymwwmfj dne");
    });

    it("should ignore capital letters", () => {
        expect(substitution("MESSAGE", "$wae&zrdxtfcygvuhbijnokmpl")).to.be.equal(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"))
    });
});

