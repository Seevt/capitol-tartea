export const categories = [
  {
    name: "category1",
    subcategories: [
      {
        name: "category2",
        subcategories: [],
      },
      {
        name: "category3",
        subcategories: [
          {
            name: "category4",
            subcategories: [],
          },
        ],
      },
    ],
  },
  {
    name: "category5",
    subcategories: [],
  },
];

const findPath = (nodes, target, currentPath) => {
  for (const node of nodes) {
    const newPath = [...currentPath, node.name];
    if (node.name === target) {
      return newPath;
    }
    const result = findPath(node.subcategories, target, newPath);
    if (result) {
      return result;
    }
  }
  return null;
};

export const getCategoryPath = (categories, categoryName) => {
  const pathArray = findPath(categories, categoryName, []);
  return pathArray ? "/" + pathArray.join("/") : undefined;
};

// // OUTPUT SAMPLES
// console.log(getCategoryPath(categories, "category4")); // should output: '/category1/category3/category4'
// console.log(getCategoryPath(categories, "category2")); // should output: '/category1/category2'
// console.log(getCategoryPath(categories, "category5")); // should output: '/category5'
