import produce from 'immer';
import {ActionType} from "../action-types";
import {Action} from '../actions';
import User from "../types/User";

interface Auth {
    errors?: [] | null,
    loading: boolean
}

interface UserAuth extends Auth {
    user: User
    guest: null;
}

interface GuestAuth extends Auth {
    guest: {};
    user: null;
}

interface GuestAndUserAuth extends Auth {
    guest: null,
    user: null
}


type AuthState = UserAuth | GuestAuth | GuestAndUserAuth;


export const authInitialState: AuthState = {
    errors: null,
    loading: false,
    user: null,
    guest: null
}

const reducer = produce(
    (state = authInitialState, action: Action) => {
        switch (action.type) {
            // GET USER
            case ActionType.GET_USER_PENDING:
                state.loading = true;
                return state;
            case ActionType.GET_USER_FULFILLED:
                state.user = action.payload;
                state.loading = false;
                return state;
            case ActionType.GET_USER_ERROR:
                state.loading = false;
                state.user = null;
                return state;


            //     USER LOGIN
            case ActionType.LOGIN_PENDING:
                // state.loading = true;
                return state;
            case ActionType.LOGIN_FULFILLED:
                state.user = {};
                state.loading = false;
                return state;
            case ActionType.LOGIN_REJECTED:
                state.errors = action.payload.errors;
                return state;


            //     GUEST LOGIN
            case ActionType.GUEST_LOGIN:
                state.guest = {};
                state.user = null;
                state.errors = null;
                return state;


            // REGISTER
            case ActionType.REGISTER:
                if (action.payload.errors) {
                    state.errors = action.payload.errors;
                    return state;
                }
                state.user = {email: action.payload.email, name: action.payload.name}
                return state;


            //RESET ERRORS
            case ActionType.RESET_AUTH_ERRORS:
                state.errors = null;
                return state;

            default:
                return state;
        }
    }
)

export default reducer;