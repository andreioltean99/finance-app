import {ActionType} from "../action-types";
import User from "../types/User";

export interface OpenExtraPageAction {
    type: ActionType.OPEN_EXTRA_PAGE;
    payload: {
        page: string
    }
}

export interface CloseExtraPageAction {
    type: ActionType.CLOSE_EXTRA_PAGE;
}

export interface SetCurrentPageAction {
    type: ActionType.SET_CURRENT_PAGE;
    payload: {
        currentPage: string
    }
}

export interface LoginPendingAction {
    type: ActionType.LOGIN_PENDING;
}

export interface LoginFulfilledAction {
    type: ActionType.LOGIN_FULFILLED;
}

export interface LoginRejectedAction {
    type: ActionType.LOGIN_REJECTED;
    payload: {
        errors: []
    }
}

export interface RegisterAction {
    type: ActionType.REGISTER;
    payload: {
        name: string,
        email: string,
        password: string
        passwordConfirmation: string
        errors: [] | null
    }
}

export interface LogoutAction {
    type: ActionType.LOGOUT;
}

export interface GetUserPendingAction {
    type: ActionType.GET_USER_PENDING;
}

export interface GetUserFulfilledAction {
    type: ActionType.GET_USER_FULFILLED;
    payload: User
}

export interface GetUserErrorAction {
    type: ActionType.GET_USER_ERROR;
}

export interface GuestLoginAction {
    type: ActionType.GUEST_LOGIN;
}

export interface ResetAuthErrorsAction {
    type: ActionType.RESET_AUTH_ERRORS;
}

export type Action =
    OpenExtraPageAction
    | CloseExtraPageAction
    | SetCurrentPageAction
    | LoginPendingAction
    | LoginFulfilledAction
    | LoginRejectedAction
    | RegisterAction
    | LogoutAction
    | GetUserPendingAction
    | GetUserFulfilledAction
    | GuestLoginAction
    | ResetAuthErrorsAction
    | GetUserErrorAction
    ;