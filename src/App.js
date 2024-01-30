import store from "./store/store";
import {Provider}  from "react-redux";
import TodoList from "./Todolist"

function App() {
  return (
   <Provider store={store}>
    <TodoList></TodoList>
   </Provider>
  );
}

export default App;
