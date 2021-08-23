const initialState = {
  darkMode: false,
  background: "#fff",
  contrastBackground: "#ededed",
  fontColor: "#2C2C2C",
  shadowColor: "#b0b0b0",
  blueLink: "#0a5894"
};

function themeStore(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_THEME":
      if (payload.theme === false) {
        return initialState;
      } else {
        return {
          ...state,
          darkMode: true,
          background: "#454545",
          contrastBackground: "#323232",
          fontColor: "#ededed",
          shadowColor: "#272727",
          blueLink: "#47ABF8"
        };
      }
    default:
      return state;
  }
}

export default themeStore;
