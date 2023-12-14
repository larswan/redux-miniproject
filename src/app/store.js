import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice' // not what its named in counterSlice.js ??
import fetchedPokemonReducer from '../features/pokemonFetch/pokemonSlice';  // Correct import

// Creates a redux store and automatically configures redux devtools for inspecting the store white developing
export default configureStore({ 
    reducer: {
        fetchedPokemon: fetchedPokemonReducer,
        counter: counterReducer,
    },
})