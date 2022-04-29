import {createStore} from 'redux'
import rootReducer from './reducer/rootReducer'
import storeSynchronize from 'redux-localstore'

const store = createStore(rootReducer);

export default store;

storeSynchronize(store)