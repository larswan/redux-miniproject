import { useSelector } from "react-redux"
import { selectFetchedPokemon } from "./pokemonSlice"

const FetchedObjectDisplay = () => {
    const fetchedPokemon = useSelector(selectFetchedPokemon)

    return(
        <div className="displayContainer">
            <img src={fetchedPokemon.sprites.front_default} />
            <h2>{fetchedPokemon.name}</h2>
        </div>
    )
}
export default FetchedObjectDisplay