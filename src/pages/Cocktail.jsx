import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  console.log("first::", validIngredients);
  return (
    <Wrapper>
      <div>
        <header>
          <Link to="/" className="btn">
            Back home
          </Link>
          <h3>{name}</h3>
        </header>
        <div className="drink">
          <img src={image} alt={name} className="img" />
          <div className="drink-info">
            <p>
              <span className="drink-data">category:</span>
            </p>
            {category}
            <p>
              <span className="drink-data">glass:</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions:</span>
              {validIngredients.map((item, index) => {
                return (
                  <div className="ing">
                    {item}
                    {index < validIngredients.length - 1 ? "," : ""}
                  </div>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
