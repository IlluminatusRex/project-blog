//selectors
export const getAllCategories = ({ categories }) => categories;
export const getFilteredCategories = ({ posts }, category) => posts.filter((post) => post.category === category);

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const categoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default categoriesReducer;