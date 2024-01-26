import { Provider } from "react-redux";
import store from "./Store/store";
import Counter from "./counter1"
import Counter1 from "./counter2";
import counter2 from "./counter2";
import Counter2 from "./counter3";


function App() {
  return (
   <Provider store={store}>
      <Counter></Counter>
      <Counter1></Counter1>
      <Counter2></Counter2>
   </Provider>
  );
}

export default App;
