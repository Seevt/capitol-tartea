import { getCategoryPath, categories } from "../index";

test("category path of category4 should be '/category1/category3/category4'", () => {
  const path = getCategoryPath(categories, "category4");

  expect(path).toBe("/category1/category3/category4");
});

test("category path of category2 should be '/category1/category2'", () => {
  const path = getCategoryPath(categories, "category2");

  expect(path).toBe("/category1/category2");
});

test("category path of category5 should be '/category5'", () => {
  const path = getCategoryPath(categories, "category5");

  expect(path).toBe("/category5");
});
