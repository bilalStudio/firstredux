const doneReducer = (state = [], action) => {
    // console.log('type',action.type);
     console.log('type',action.value);
    switch (action.type) {
      case 'doneItem' :
        return [...state, action.doneItem];
    //   case "addList":
    //     return [...state, action.text];
    //   case "removeList":
    //     return [];
      case "removeItemofdoen":
        return (state = state.filter((item) => item !== action.item));
  
      default:
        return state;
    }
  };
  
  export default doneReducer;
  