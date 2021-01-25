import axios from "../../service/axios";
const GET_RECIPES = "get_recipe";
const GET_SPECIALS = "get_specials";

export const getRecipes = () => {
  return (dispatch) => {
    axios
      .get("/recipes")
      .then((response) => {
        const users = response.data.map((user) => user);
        dispatch(fetchRecipeSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchRecipeFailed());
      });
  };
};

export const getSpecials = () => {
  return (dispatch) => {
    axios
      .get("/specials")
      .then((response) => {
        const specials = response.data.map((special) => special);
        dispatch(fetchSpecialsSuccess(specials));
      })
      .catch((error) => {
        dispatch(fetchSpecialsFailed());
      });
  };
};

const fetchRecipeSuccess = (data) => ({
  type: GET_RECIPES,
  payload: {
    success: true,
    recipes: data,
  },
});

const fetchRecipeFailed = (data) => ({
  type: GET_RECIPES,
  payload: {
    success: false,
    recipes: [],
  },
});

const fetchSpecialsSuccess = (data) => ({
  type: GET_SPECIALS,
  payload: {
    success: true,
    specials: data,
  },
});

const fetchSpecialsFailed = (data) => ({
  type: GET_SPECIALS,
  payload: {
    success: false,
    specials: [],
  },
});

const initialState = {
  success: false,
  recipes: [],
  specials: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES: {
      return {
        ...state,
        recipes: action.payload.recipes,
        success: action.payload.success,
      };
    }
    case GET_SPECIALS: {
      return {
        ...state,
        specials: action.payload.specials,
        success: action.payload.success,
      };
    }
    default:
      return initialState;
  }
};
export default reducer;
