import { httpResponse } from "../../lib/httpResponses";

export async function getRecipe(req, res) {

  const { id } = req.params;

  try {

    return httpResponse(200, 'Recipe Found', {
      id: id,
      title: "Chicken Alfredo Pasta",
      ingredients: [
        "1 lb chicken",
        "1 cup Alfredo sauce",
        "1/2 cup Parmesan cheese",
        "1/2 cup Mozzarella cheese",
        "1/2 cup heavy cream",
        "1/4 cup butter",
        "2 cloves garlic",
        "1/2 tsp salt",
        "1/2 tsp pepper",
        "1/2 tsp Italian seasoning",
        "1/2 tsp paprika",
        "1/4 tsp red pepper flakes",
        "1/4 cup parsley",
        "8 oz fettuccine pasta"
      ],
      cookingTime: 30,
      instructions: [
        "Cook pasta according to package instructions",
        "Season chicken with salt, pepper, Italian seasoning, and paprika",
        "Heat 2 tbsp butter in a skillet over medium-high heat",
        "Add chicken and cook until golden brown",
        "Remove chicken from skillet",
        "Add 2 tbsp butter to skillet",
        "Add garlic and cook until fragrant",
        "Add heavy cream, Parmesan cheese, and Mozzarella cheese",
        "Stir until cheese is melted",
        "Add Alfredo sauce and red pepper flakes",
        "Add chicken and pasta to skillet",
        "Stir until combined",
        "Top with parsley",
        "Serve and enjoy!"
      ],
      image: "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-bowl.jpg",
    }, res);

  } catch (error) {
    return httpResponse(500, error.message, null, res);
  }
}