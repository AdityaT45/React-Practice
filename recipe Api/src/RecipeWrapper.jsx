/* eslint-disable react/prop-types */
import RecipeCard from './RecipeCard'

const RecipeWrapper = ({recipe}) => {
    
  return (
    <>
    {recipe.map((dish)=><RecipeCard 
    key={dish.id}
    name={dish.name}
    ingredients={dish.ingredients}
    prepTimeMinutes={dish.prepTimeMinutes}
    cookTimeMinutes={dish.cookTimeMinutes}
    servings={dish.servings}
    difficulty={dish.difficulty}
    caloriesPerServing={dish.caloriesPerServing}
    tags={dish.tags}
    image={dish.image}
    rating={dish.rating}
    mealType={dish.mealType}
    
    />)}
    
    </>

  )
}

export default RecipeWrapper