const initialState = {
    jwt: "",
    creationDate: "",
    log: false
  };
  
  function tokenStore(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case "add_jwt":
            return { ...state, jwt: payload.jwt, creationDate: payload.date, log: true};
    
      case "reset_jwt":
        return initialState;
  
      default:
        return state;
    }
  }
  
  export default tokenStore;
  