import { Product } from './components/Product';
import { products } from './data/Products';

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default App;
