

const ProductDetails = () => {
  const product = {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
      },
    ],
    returnPolicy: "30 days return policy",
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "150px", height: "auto", marginRight: "20px" }}
        />
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>
            <strong>Price:</strong> ${product.price.toFixed(2)} ({product.discountPercentage}% off)
          </p>
          <p>
            <strong>Rating:</strong> {product.rating} / 5
          </p>
          <p>
            <strong>Stock Status:</strong> {product.availabilityStatus}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>
              <strong>{review.reviewerName}</strong> ({review.rating}/5):
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2>Additional Information</h2>
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>SKU:</strong> {product.sku}
        </p>
        <p>
          <strong>Weight:</strong> {product.weight}g
        </p>
        <p>
          <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
        </p>
        <p>
          <strong>Warranty:</strong> {product.warrantyInformation}
        </p>
        <p>
          <strong>Shipping:</strong> {product.shippingInformation}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;