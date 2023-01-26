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


export const authInitialState: AuthState = {
    errors: null,
    user: null,
    guest: null
}

const reducer = produce(
    (state = authInitialState, action: Action) => {
        switch (action.type) {
            case ActionType.LOGIN:
                state.user = {email: action.payload.email};
                state.errors = action.payload.errors;
                return state;
            case ActionType.REGISTER:
                state.user = {email: action.payload.email, name: action.payload.name}
                state.errors = action.payload.errors;
                return state;
            case ActionType.GUEST_LOGIN:
                state.guest = {};
                state.user = null;
                state.errors = null;
                return state
            default:
                return state;
        }
    }
)

export default reducer;