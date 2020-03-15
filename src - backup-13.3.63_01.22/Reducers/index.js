import ProductReducer from './ProductReducer'
import OrderReducer from './OrderReducer'
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
    products:ProductReducer,
    orders:OrderReducer
})

export default rootReducer