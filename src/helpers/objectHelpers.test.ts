import { makeUppercase, replaceSpaces, limitLength } from "./objectHelpers";

test("make a string uppercase", function() {
    expect(makeUppercase("dd")).toBe("DD")
});

test("replace a space with an underscore", function() {
    expect(replaceSpaces("d d")).toBe("d_d")
});

test("Limit the length of a string", function() {
    expect(limitLength(2, "yeees this is a string")).toBe("ye")
});