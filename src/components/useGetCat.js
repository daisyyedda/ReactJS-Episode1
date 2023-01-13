import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
  const { data, refetch, isLoading: isCatLoading, error } = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = () => {
    alert("REFETCHING DATA");
    refetch();
  };

  if (error) {
    return <h1> SORRY THERE WAS AN ERROR. </h1>;
  };

  return { data, refetchData, isCatLoading };
};
