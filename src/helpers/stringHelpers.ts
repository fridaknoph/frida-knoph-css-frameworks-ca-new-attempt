import { makeUppercase, replaceSpaces, limitLength } from "./objectHelpers";

// id is a number
// code is an uppercase string
// title is a string with spaces replaced with underscores and a maximum length of 12 characters

export type Product = {
  id: number;
  code: string;
  title: string;
};

export default function createProduct(Product: Product): Product {
  return {
    id: Product.id,
    code: makeUppercase(Product.code),
    title: limitLength(12, replaceSpaces(Product.title)),
  };
}
