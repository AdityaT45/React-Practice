/* eslint-disable react/prop-types */
import ProductCard from "./productCard";

const ProductListWrapper = ({ data }) => {
  return (
    <>
      <h1 className="text-center mt-2 mb-3">Explore Our Products</h1>
      <div className="container d-flex flex-wrap ">
       
          {data.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
              tags={product.tags}
              reviews={product.reviews}
              returnPolicy={product.returnPolicy}
              images={product.images}
            />
          ))}
        </div>
    
    </>
  );
};

export default ProductListWrapper;
