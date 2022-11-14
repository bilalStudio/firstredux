const authReducer = (state=false,action) => {
  switch(action.type){
    case "LOG_IN" :return true
    case "LOG_OUT":return false
    default: return state
  }
}

export default authReducer

//In the authReducer, the state is initialized to false. LOG_IN will set 
//it back to true and LOG_OUT returns it to false to complete the toggling action.