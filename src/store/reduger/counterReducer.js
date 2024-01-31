let initialState = {
    count:0
}

let CounterReducer = (state=initialState,action)=>{

    if(action.type==='Inc'){
        return {...state,count:state.count+1}
    }
    if(action.type==='Dec'){
        return {...state,count:state.count-1}
    }
    return state

}
export default CounterReducer