const { sum, person, toggle, range } = require("./index");

describe("test index.js file", () => {
  it("sum 1 + 2 to Equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  }),
    it("make a person", () => {
      expect(person("Kim", 20)).toEqual({
        name: "Kim",
        age: 20,
      });
    }),
    it("return false", () => {
      expect(toggle(true)).toBeFalsy();
      expect(toggle(true)).not.toBeTruthy();
    });
  it("has 2", () => {
    expect(range(1, 3)).toContain(2);
  });
});
