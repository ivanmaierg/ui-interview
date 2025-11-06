import { useEffect, useState } from "react";
import "./home.css";
import { fetchCharacters, transformCharacter } from "../../services/api";
import type { CharactersPage,Character } from "../../services/api";


const useGetCharacter = ({params}:any) =>{
  const [data, setData] = useState<CharactersPage>();
  const [isLoading, setLoading] = useState(true); 

  useEffect(()=>{
      const getData = async () => {
        const characters = await fetchCharacters(params);
        const transformedCharacter = transformCharacter(characters);
        setLoading(false)
        setData(transformedCharacter)
      } 

      getData();

  },[])

  return {data,isLoading}
}


const CharacterItem = ({name,gender,films}:Character) => (
  <li className='character-item'>
    <span className="name">
      {name}
    </span>
    <span className="gender">
      {gender}
    </span>
    <span className="films">
      {
        films.map(el => 
          <a href={el}/>
        )
      }
    </span>
  </li>
)


const ListCharacters = ({charactersPage}:{charactersPage:CharactersPage}) => {
  return (
    <ul className='character-list'>
      {charactersPage.results.map(({name,gender,films}:Character) =>
       <CharacterItem name={name} gender={gender} films={films} key={name}/>
    )}    
    </ul>
  )
}

const Controls = () => {
  <div>
    <button>
      Previous
    </button>
    <button>
      Next
    </button>
  </div>
}

const SearchInput = ({handleSearch}:{handleSearch:Function}) => {
  const [input,setInput] = useState('');
  return(
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => handleSearch(input)}>
        search
      </button>
    </div>
    
  )
}

const Home = () => {
  const [search, setSearch] = useState("");

  const {data,isLoading} = useGetCharacter({search});
  const handleSearch = (val:string) => setSearch(val);

  if(isLoading){
    return <>
      Loading...
    </>
  }

  return (
    <>
      <div>
        <SearchInput handleSearch={handleSearch} />
        <ListCharacters charactersPage={data} />
        <Controls />
      </div>
    </>
  );
};

export default Home;
