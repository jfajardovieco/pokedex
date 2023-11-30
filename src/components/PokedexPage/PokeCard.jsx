import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom"
import './PokeCard.css'


const PokeCard = ({ url }) => {
    const [infoPoke, getInfoPoke] = useFetch(url)

    useEffect(() => {

        getInfoPoke()
    }, [])
    const navigate = useNavigate()
    

    const handleNavigate = () => {
        navigate(`/pokedex/${infoPoke?.id}`)
    }

    return (

        <article onClick={handleNavigate} className="card">
            <header className={`header__Card ${infoPoke?.types[0].type.name}`}>
                <img className="img__article" src={infoPoke?.sprites.other["official-artwork"].front_default} alt="" />
            </header>
            <section className="section__article">
                <h3 className="h3__name">{infoPoke?.name}</h3>
                <ul className="ul__type" >
                    {
                        infoPoke?.types.map(infoType => (
                            <li className="li__type" key={infoType.type.url} >  {infoType.type.name}</li>
                        ))
                    }
                </ul>
                <hr />

                <ul className="ul__stats">
                    <section className="section__stats-name">
                        {
                            infoPoke?.stats.map(infoStat => (
                                <li className="li__stats" key={infoStat.stat.url}>
                                    <span className="span__stats"> {infoStat.stat.name}</span>
                                    {/* <span className="span__stats"> {infoStat.base_stat}</span> */}
                                </li>

                            ))
                        }
                    </section>
                    <section className="section__stats-stat">
                        {
                            infoPoke?.stats.map(infoStat => (
                                <li className="li__stats" key={infoStat.stat.url}>
                                    {/* <span className="span__stats"> {infoStat.stat.name}</span> */}
                                    <span className="span__stats"> {infoStat.base_stat}</span>
                                </li>

                            ))
                        }
                    </section>
                </ul>

            </section>
        </article>

    )

}

export default PokeCard