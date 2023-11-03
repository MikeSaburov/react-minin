import React, { Children, useState } from 'react';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Loader } from './components/Loader';
import { Error } from './components/Error';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';

function App() {
  const { isLoading, products, error } = useProducts();
  const [modal, setModal] = useState(true);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {isLoading && <Loader />}
      {error && <Error error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create new product">
          <CreateProduct />
        </Modal>
      )}
    </div>
  );
}

export default App;
