import produce from 'immer';
import {ActionType} from "../action-types";
import {Action} from '../actions';

const initialState = {
    extraPage: '',
    currentPage: 'Portfolio'
}

const reducer = produce(
    (state = initialState, action: Action) => {
        switch(action.type){
            case ActionType.OPEN_EXTRA_PAGE:
                const {page} = action.payload;
                state.extraPage = page;
                return state;
            case ActionType.CLOSE_EXTRA_PAGE:
                state.extraPage = '';
                return state;
            case ActionType.SET_CURRENT_PAGE:
                const {currentPage}  = action.payload;
                state.currentPage = currentPage;
                return state;

            default:
                return state;
        }
    }
)

export default reducer;