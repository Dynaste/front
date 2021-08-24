const initialState = {
    tasks: [],
  };
  
  const taskReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_TASKS":
            if (payload.tasks && payload.tasks.length > 0) {
                const tasksList = [...state.tasks, ...payload.tasks];
                tasksList = tasksList.sort();

                return {
                    ...state,
                    tasks: tasksList
                }
            } else if (!payload.tasks || payload.tasks.length === 0) {
                return {
                    ...state
                }
            }
        case "MODIFY_TASKS":
            if (payload.tasks && payload.tasks.length > 0) {
                const tasksList = [...state.tasks.filter(task => !payload.tasks.find(task._id)), ...payload.tasks];
                tasksList = tasksList.sort();
            } else {
                return {
                    ...state,
                    tasks: tasksList
                };
            }

      default:
        return state;
    }
  }
  
  export default taskReducer;
  