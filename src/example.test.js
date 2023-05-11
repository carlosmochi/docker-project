const sum = require("./example.js")

test('adds 1 + 2 result must be 3', () => {
    expect(sum(1,2)).toBe(3);
})