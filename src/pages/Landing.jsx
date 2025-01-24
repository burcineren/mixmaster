import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "./CocktailList";
import SearchForm from "./SearchForm";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      // Default to 'a' if no search term is provided since API has changed
      searchTerm = searchTerm || "a";

      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "a";
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
  return (
    <div>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} searchTerm={searchTerm} />
    </div>
  );
};

export default Landing;
