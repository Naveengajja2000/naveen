import { act } from "react-dom/test-utils"

const initialstate1 ={
    count:25
}

const CounterReducer1=(state=initialstate1,action)=>{
    if(action.type === 'Inc1'){
        return{...state,count:state.count+1}
    }
    if(action.type === 'Dec1'){
        return{...state,count:state.count-1}
    }
    if(action.type === 'Rec1'){
        return{...state,count:initialstate1.count}
    }
    return state
}

export default CounterReducer1