/* eslint-disable react/prop-types */

const ProductCard = ({title,category,price,rating,stock,tags,returnPolicy,images}) => {
  return (
    <>
    <div className="card m-1 " style={{ width: '19rem' }}>
      <img src={images} className="card-img-top" alt={title} />
      <div className="card-body border-top border-top-5">
        <h4 className="card-title  mt-1">{title}</h4>
       <p className="card-text">
          <strong>Category:</strong> {category}<br />
          <strong>Price:</strong> ${price}<br />
          <strong>Rating:</strong> {rating} ⭐<br />
          <strong></strong>only  {stock} available...<br />
          <strong>Tags:</strong> {tags.join(',')}<br />
          <strong>Return Policy:</strong> {returnPolicy}<br />
             </p> 
        <a  className="btn btn-primary ">View Product</a>
      </div>
      
    </div>
    </>
  )
}

export default ProductCard