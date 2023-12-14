import { useDispatch } from 'react-redux';
import { setFetchedPokemon } from './pokemonSlice';

const FetchButton = () => {
    const dispatch = useDispatch();


    const request = async () => {
        try {
            let req = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            let res = await req.json();
            console.log(res);

            // Dispatch the action to update the fetchedPokemon state
            dispatch(setFetchedPokemon(res));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return(
        <button className="fetchButton" onClick={request}>Click to fetch</button>
    )
}

export default FetchButton