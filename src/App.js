import Header from './header';
import Products from './products';

function App() {
  return (
   <div  className="border border-4 border-danger p-2 w-100">
    <h1 className='bg-danger'>Welcome to my Products</h1>
    <Header></Header>
    <Products></Products>
   </div>
  );
}
export default App