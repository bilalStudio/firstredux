const counterReducer = (state = [], action) => {
   console.log('done',action.done);
  switch (action.type) {
    case ('addList'):
      return [...state, action.text];
    case ("addListdone" ):
      return [...state, action.doneText];
    case "removeList":
      return [];
    case "removeItem" :
      return state = state.filter((item) => item !== action.item);
    default:
      return state;
  }
};

export default counterReducer;
