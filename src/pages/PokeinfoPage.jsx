import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './PokeinfoPage.css'

const PokeinfoPage = () => {
const { id } = useParams()
const url = `https://pokeapi.co/api/v2/pokemon/${id}`
const [pokemon, getPokemon] = useFetch(url)
  useEffect(() =>(
getPokemon()
  ), [])
  
  return (
    <div className="article__div">
      <header>
        <img src="https://i.imgur.com/AYutZOF.png" alt="" />
      </header>
      <article className="info">
        <header className={`header__info ${pokemon?.types[0].type.name}`}>
        <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        <hr />
        </header>
        
        <h2>{pokemon?.name}</h2>
        <section className="section__infocard">
          <section>
        <h2 className="h2__type">tipo</h2>
        <ul><h3> {
                    pokemon?.types.map(infoType => (
                        <li key={infoType.type.url} >  {infoType.type.name}</li>
                    ))
                }</h3></ul>
                </section>
                <section>
                  <h2 className="h2__hability">Hablidades</h2>
                  <ul><h3>
                    {
                      pokemon?.abilities.map(infoabilitie => (
                        <li key={infoabilitie.ability.url} >  {infoabilitie.ability.name}</li>
                    ))
                    }
                    
                    </h3></ul>
                </section>

                </section>
                <hr />
                <section >
                <section className="section__state">
                  <ul>
                    {
                      pokemon?.stats.map(infostat =>(
                          <li key={infostat.stat.url}>
                            <span>{infostat.stat.name} </span>
                          </li>
                          

                      ))
                    }

                    
                  </ul>
                  <ul>
                    <li><div className="hp"></div></li>
                    <li><div className="hp"></div></li>
                    <li><div className="hp"></div></li>
                    <li><div className="hp"></div></li>
                    <li><div className="hp"></div></li>
                    <li><div className="hp"></div></li>
                  </ul>

                  <ul>
                    {
                      pokemon?.stats.map(infostat => (
                        <li key={infostat.stat.url}>{infostat.base_stat}</li>
                      ))
                    }
                  </ul>
                  </section>
                  <section>
                <div className="stats__complete">
                
              

                  
                  
                  
                
                
                </div>
                
                </section>
                </section>
      </article>
    </div>
  )
}

export default PokeinfoPage