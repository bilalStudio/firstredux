const counterReducer = (

  state = { todoList: [], doneList: [] },
  action
) => {
 
  console.log(action.type)
  switch (action.type) {
    case "addList":
      return {...state, todoList:[...state.todoList, action.text]};
    case "addListdone":
      return {...state, doneList:[...state.doneList, action.doneText]};
    case "removeItem":
      return {...state,todoList:state.todoList.filter((item)=>item!== action.item)};
    case "removedoneItem":
      return {
        ...state,
        doneList :state.doneList.filter((item) => item !== action.items)}
    default:
      return state;
  }
};

export default counterReducer;
