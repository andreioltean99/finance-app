import {ActionType} from "../action-types";

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

export interface LoginAction {
    type: ActionType.LOGIN;
    payload: {
        email: string,
        password: string
        errors: [] | null
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

export interface GetUserAction {
    type: ActionType.GET_USER;
}

export interface GuestLoginAction {
    type: ActionType.GUEST_LOGIN;
}

export type Action =
    OpenExtraPageAction
    | CloseExtraPageAction
    | SetCurrentPageAction
    | LoginAction
    | RegisterAction
    | LogoutAction
    | GetUserAction
    | GuestLoginAction
    ;