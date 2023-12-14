import { useState } from 'react'
import Counter from './features/counter/Counter'
import FetchedObjectDisplay from './features/pokemonFetch/FetchedObjectDisplay'
import FetchButton from './features/pokemonFetch/FetchButton'
import { useSelector } from 'react-redux'
import { selectFetchedPokemon } from './features/pokemonFetch/pokemonSlice';


function App() {
  const fetchedPokemon = useSelector(selectFetchedPokemon)

  return (
    <>
      {fetchedPokemon && <FetchedObjectDisplay data={fetchedPokemon} />}
      <Counter />
      <FetchButton />
    </>
  )
}

export default App
