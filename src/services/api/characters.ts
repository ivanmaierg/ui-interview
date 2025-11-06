import { httpClient } from "./httpClient";

type Character = {
  name: string;
  gender: string;
  films: string[];
};

type CharactersPage= {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
};

const BASE_URL = "https://swapi.dev/api/";
export const fetchCharacters = (params:any) => {
  console.log(params)
  const search = new URLSearchParams(params)
  console.log(search)
  return httpClient.get<CharactersPage>(`${BASE_URL}/people`)
}

export const transformCharacter = (CharactersPage:CharactersPage) => {
  const formattedCharacter = CharactersPage.results.map(char => ({
    name:char.name,
    films:char.films,
    gender:char.gender
  }))

  return {
    ...CharactersPage,
    results:formattedCharacter
  }
  
} 
export type { CharactersPage, Character };

