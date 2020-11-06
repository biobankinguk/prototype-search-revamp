import React, { Component } from "react";
import useSWR from "swr"

const myApi = "https://api20201029163207.azurewebsites.net"

/* Fetch all facets from the API using SWR */
export function useDisease () {
     const { data, error } = useSWR(`${myApi}/disease`);
     return {
         diseases: data,
         isLoading: !error && !data,
         isError: error
     }
 } 
 