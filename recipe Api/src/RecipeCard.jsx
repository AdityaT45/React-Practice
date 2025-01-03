/* eslint-disable react/prop-types */

import Ingrediant from "./Ingrediant"

const RecipeCard = ({name,ingredients,prepTimeMinutes,cookTimeMinutes,servings,difficulty,caloriesPerServing,tags,image,rating,mealType}) => {
  return (

    <>
    <div className="container my-4">
  <div className="card " style={{ maxWidth: "800px", margin: "auto" }}>
    <div className="row g-0 align-items-center">
      {/* Left Side - Image */}
      <div className="col-md-6 ">
        
        <img src={image} className=" p-1 mx-1 " alt="..." style={{
            width: "100%", 
            height: "auto", 
          }}/>
      </div>

      {/* Right Side - Info */}
      <div className="col-md-6">
        <div className="card-body">
          <h4 className="card-title mb-3 bg-light">{name}</h4>
          <p className="card-text">
            <strong>Cuisine:</strong> {mealType.join(", ")} |{" "}
            <strong>Difficulty:</strong> {difficulty}
          </p>
          <p className="card-text">
            <strong>Prep Time:</strong> {prepTimeMinutes} mins |{" "}
            <strong>Cook Time:</strong> {cookTimeMinutes} mins
          </p>
          <p className="card-text">
            <strong>Servings:</strong> {servings} |{" "}
            <strong>Calories:</strong> {caloriesPerServing} kcal
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {rating} ⭐
          </p>
          <p className="card-text">
            <strong>Tags:</strong> {tags.join(", ")}
          </p>
          <h6>Ingredients:</h6>
          
            {ingredients.map((ingredient, index) => (
              <Ingrediant key={index} ingredient={ingredient}/>
            ))}
         
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default RecipeCard