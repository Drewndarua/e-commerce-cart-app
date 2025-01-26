import React from "react";
import productItem from "../Data";

function Products() {
  // const [productItem] = useState ([
  //     addProductItem = {id: '' , name: '' , price: ''}
  // ])
  return (
    <div className="products">
      <h1>Catalog</h1>
      <ul>
        {productItem.map((productItem) => (
          <li key={productItem.id}>
            {productItem.id}
            {productItem.name}: ${productItem.price}
          </li>
        ))}
      </ul>
      <button>Add to cart</button>
    </div>
  );
}

export default Products;
