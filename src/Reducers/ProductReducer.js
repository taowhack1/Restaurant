import {PRODUCTS_FETCH,PRODUCT_UPDATE,PRODUCT_CREATE,PRODUCT_FETCH} from '../Actions/types'
export default function (state = [] , action){
    switch(action.type){
        case PRODUCTS_FETCH:
        case PRODUCT_FETCH:
            return action.payload;
        case PRODUCT_UPDATE:
            return { ...state , saved : true , msg:'Updated !'}
        case PRODUCT_CREATE:
            return { saved : true , msg:'Create Succesfully !'}
        default:
            return state;
    }
}