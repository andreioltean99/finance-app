import produce from 'immer';
import {ActionType} from "../action-types";
import {Action} from '../actions';

interface Auth {
    errors?: [] | null
}

interface UserAuth extends Auth {
    user: {
        email: string,
        name?: string
    }
    guest: null;
}

interface GuestAuth extends Auth {
    guest: {};
    user: null;
}

interface GuestAndUserAuth extends Auth{
    guest: null,
    user: null
}


type AuthState = UserAuth | GuestAuth | GuestAndUserAuth ;


const initialState: AuthState = {
    errors: null,
    user: null,
    guest: null
}

const reducer = produce(
    (state = initialState, action: Action) => {
        switch (action.type) {
            case ActionType.LOGIN:
                state.user.email = action.payload.email;
                state.errors = action.payload.errors;
                return state;
            default:
                return state;
        }
    }
)

export default reducer;