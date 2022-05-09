import createProduct from "./stringHelpers";

test("This function to return an object", function () {
  expect(
    createProduct({ id: 12, code: "TOMMY", title: "this_is_your" })
  ).toStrictEqual({
    id: 12,
    code: "TOMMY",
    title: "this_is_your",
  });
});
