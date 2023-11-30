import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import { useEffect, useRef, useState } from 'react'
import PokeCard from '../components/PokedexPage/PokeCard'
import './PokedexPage.css'
import SelectType from '../components/PokedexPage/SelectType'

const PokedexPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')
const trainerName = useSelector(store => store.trainerName)
const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
const [ pokemons, getPokemons, getTypes ] = useFetch(url)

useEffect(() => {
  if(selectValue === 'allPokemons'){
    getPokemons()
  }else{
    getTypes(selectValue)
  }



},[selectValue])

const inputSearch = useRef()

const handleSubmit = e => {
e.preventDefault()
setInputValue(inputSearch.current.value.toLowerCase().trim())
inputSearch.current.value =''
}

const cbFilter = poke => {
  // Filtro en input
const nameFiltered = poke.name.includes(inputValue)


return nameFiltered
}



  return (
    <div>
      <header>
        <img src="https://i.imgur.com/AYutZOF.png" alt="" />
      </header>
      <p>Welcome <span>{ trainerName }</span>, here you  find your favorite pokemon</p>
      <form onSubmit={handleSubmit}>
        <input ref={inputSearch} type="text" />
        <button>Search pokemon</button>
      </form>
      <SelectType
      setSelectValue={setSelectValue}/>
      <div className='div__pokecard'>
        {
          pokemons?.results.filter(cbFilter).map(poke => (
            <PokeCard
            key={poke.url}
            url={poke.url}
            />
          ))
        }
      </div>

    </div>
  )
}

export default PokedexPage