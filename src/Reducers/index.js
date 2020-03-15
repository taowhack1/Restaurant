import ProductReducer from './ProductReducer'
import OrderReducer from './OrderReducer'
import {combineReducers} from 'redux'
import {reducer as reduxForm} from 'redux-form'

const rootReducer = combineReducers({
    products:ProductReducer,
    orders:OrderReducer,
    form:reduxForm
})

export default rootReducer