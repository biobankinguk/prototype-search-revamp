import React from "react";
import useSWR from "swr"

const myApi = "https://api20201029163207.azurewebsites.net"

/* Fetch all facets from the API using SWR */
export function useFacet () {
     const { data, error } = useSWR(`${myApi}/facet`);
     return {
         facets: data,
         isLoading: !error && !data,
         isError: error
     }
 } 
 