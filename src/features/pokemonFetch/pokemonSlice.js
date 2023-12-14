import { createSlice } from '@reduxjs/toolkit';

export const fetchedPokemonSlice = createSlice({
    name: 'fetchedPokemon',
    initialState: null,
    reducers: {
        setFetchedPokemon: (state, action) => {
            return action.payload;
        },
    },
});

export const { setFetchedPokemon } = fetchedPokemonSlice.actions;
export const selectFetchedPokemon = (state) => state.fetchedPokemon;

export default fetchedPokemonSlice.reducer;