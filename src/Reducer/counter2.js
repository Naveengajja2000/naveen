const initialstate2 ={
    count:101
}

const CounterReducer2 =(state=initialstate2,action)=>{
    if(action.type === 'Inc2'){
        return{...state,count:state.count+1}
    }
    if(action.type === 'Dec2'){
        return{...state,count:state.count-1}
    }
    if(action.type === 'Rec2')
        return{...state,count:initialstate2.count}

     return state   
}

export default CounterReducer2





