import ProductsValue from "./components/ProductsValue";
import ProductsForm from "./components/ProductsForm";    
import ProductsSearch from "./components/ProductsSearch";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the React Redux App!</h1>
 <ProductsForm />  
 <ProductsSearch />
 <ProductsList />
 <ProductsValue />
    </div>
  );
}

export default App;