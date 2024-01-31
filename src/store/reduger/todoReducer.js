let initialState  = {
    todos:['jasiM','Naveen'],
}

let TodoReducer = (state=initialState,action)=>{

    if(action.type==='ADDTODO'){
        return {...state,todos:[...state.todos,action.payload]}
    }

    return state
}
export default TodoReducer