import './App.css';
import Navbar from './Component/Navbar'
import Home from './Component/Home';
import Products from './Component/Products';
import { Route,Switch } from "react-router";
import Product from './Component/Product';
import Cart from './Component/Cart';
import AddProduct from './Component/AddProduct';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route path="/cart" component={Cart}/>
        <Route path="/addproduct" component={AddProduct}/>

        </Switch>
        {/* <AddProduct/> */}
    </>
  );
}


export default App;