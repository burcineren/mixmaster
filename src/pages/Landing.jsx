import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "./CocktailList";

export const loader = async () => {
  const cocktailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const searchTerm = "a";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  return { drinks: response.data.drink, searchTerm };
};
const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  return (
    <div>
      <CocktailList drinks={drinks} searchTerm={searchTerm} />
    </div>
  );
};

export default Landing;
