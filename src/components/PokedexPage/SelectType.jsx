import { useEffect, useRef } from "react"
import useFetch from "../../hooks/useFetch"



const SelectType = ({ setSelectValue }) => {
const url = 'https://pokeapi.co/api/v2/type'
const [types, getTypes] = useFetch(url)

useEffect(() =>{
getTypes()


}, [])

const selectElement = useRef()
const handleChange = () => {
    setSelectValue(selectElement.current.value)
}

  return (
    <select ref={selectElement} onChange={handleChange}>
        <option value='allPokemons'>All Pokemons</option>
        {
            types?.results.map(type => (
                <option key={type.url} value={`${type.url}`}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType