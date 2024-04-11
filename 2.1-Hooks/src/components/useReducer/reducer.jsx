const reducer = (state,action) =>{
     // if(action.type === "INC"){
     //      return (state = state + 1)
     // }
     // if(action.type === "DEC"){
     //      // return (state = state - 1)   
     //      let newNum = 0;
     //      state >= 1 ? (newNum = state - 1) : (newNum = 0)
     //      return newNum;
     // }
     // return state;

     switch (action.type) {
          case "INC":
            return (state += 1);
          case "DEC":
            let newCount = 0;
            state >= 1 ? (newCount = state - 1) : (newCount = 0);
            return newCount;
          default:
            return count;
        }
}

export default reducer