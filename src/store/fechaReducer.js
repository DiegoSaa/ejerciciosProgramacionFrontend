const initialState = {
  filterData: 0,
};

const fechaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fecha/filter":
      return {
        filterData: action.modificar,
      };
    default:
      return state;
  }
};

export default fechaReducer;
