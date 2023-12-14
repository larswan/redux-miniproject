# Redux Miniproject

Learning Redux and Redux Toolkit with React.

## Basic Use

### To access a slice

exampleSlice.js:

```js
import { createSlice } from '@reduxjs/toolkit';

export const fetchedPokemonSlice = createSlice({
    name: 'fetchedPokemon',
    initialState: null,
});

export const selectFetchedPokemon = (state) => state.fetchedPokemon;
export default exampleSlice.reducer;
```

store.js:

```js
import exampleSlice from "./exampleSlice"
//in the reducer object
exampleSlice: exampleSliceReducer
```

In another component:

```js
import { useSelector } from 'react-redux'
import { selectExampleSlice } from './slices/exampleSlice';

//within the component declare the variable and set to useSelector 
const example = useSelector(selectExampleSlice)
```

### To change state:

exampleSlice.js

```js
// add a reducer to the slice object
reducers: {
        setFetchedPokemon: (state, action) => {
            return action.payload;
        },
    },

export const { setExampleSlice } = exampleSlice.actions;
```

In a component:

```js
import { setExampleSLice } from './exampleSlice';
import { useDispatch } from 'react-redux';

// inside the component 
    const dispatch = useDispatch();
    dispatch(setExampleSlice(newThingy));
```

## My Pokemon API Example

Created pokemonSlice.js

store.js:

- Imported poke reducer
- Added fetchedPokemon to reducer object

FetchButton.jsx:

- imported useDispatch and setFetchedPokemon
- Declare dispatch inside the component
- In the request add dispatch(setFetchedPokemon(res))

App.jsx:

- imported useSelector (to access store) and selectFetchedPokemon
- declare const fetchedPokemon = useSelector(selectFetchedPokemon);
- conditionally display Display component and pass pokemon as prop

## Quickstart Steps


**The file structure I use here is based off Redux docs but I hate it. Here's what ChatGPT recommends:**

```
src/
├── components/
├── containers/
├── store/
│   ├── configureStore.js
│   ├── reducers/
│   │   ├── counter.js
│   │   └── auth.js
│   ├── actions/
│   │   ├── counterActions.js
│   │   └── authActions.js
│   ├── selectors/
│   │   └── counterSelectors.js
│   └── index.js
├── App.js
└── index.js
```

**ANYWAYS Heres their setup**

```bash
npm install @reduxjs/toolkit react-redux
```

Created store.js.

```js
// Creates a redux store and automatically configures redux devtools for inspecting the store white developing
export default configureStore({ 
    reducer: {},
})
```

In main.jsx import Provider and store, then wrapped App in provider.

```js
import { Provider } from 'react-redux' // import provider
import store from './app/store.js' // import the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> //wrap app in the provider
      <App />
    </Provider>
  </React.StrictMode>,
)
```

Made src/features/counter/counterSlice.js (they're doing too much with these folders..):

```js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {state.value += 1},
        decrement: (state) => {state.value -= 1},
        incrementByAmount: (state, action) => {state.value += action.payload},
    },
})
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

Add slice reducers to store. Confused how "export default counterSlice.reducer" turned into counterReducer

```js
import counterReducer from '../features/counter/counterSlice' // not what its named in counterSlice.js ??

reducer: {
        counter: counterReducer, // +added
    },
```

Created src/features/counter/Counter.jsx. Had to fix stuff, their intro docs suck but it works now.
