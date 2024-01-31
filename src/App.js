import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store/store";
import Todolist from "./Todolist";

function App(){
  return(
    <div className="border  container border-2 border-danger  p-2">
       <h1>Welcome to Naveen</h1>
        <Provider store={store}>
            <Counter></Counter>
            <Todolist></Todolist>
        </Provider>
    </div>
  )
}

export default App;