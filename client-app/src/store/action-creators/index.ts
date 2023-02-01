import {ActionType} from "../action-types";
import {Action, CloseExtraPageAction, OpenExtraPageAction, SetCurrentPageAction} from "../actions";
import {Dispatch} from "redux";
import axios, {csrf} from "../../api/axios";
import {isAxiosError} from "axios";

export const openExtraPage = (page: string): OpenExtraPageAction => {
    return {
        type: ActionType.OPEN_EXTRA_PAGE,
        payload: {
            page
        }
    }
}

export const closeExtraPage = (): CloseExtraPageAction => {
    return {
        type: ActionType.CLOSE_EXTRA_PAGE,
    }
}

export const setCurrentPage = (currentPage: string): SetCurrentPageAction => {
    return {
        type: ActionType.SET_CURRENT_PAGE,
        payload: {
            currentPage
        }
    }
}

export const login = (email: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN_PENDING
        });

        try {
            await csrf();
            await axios.post('/login', {
                email, password
            });

            const {data} = await axios.get('/api/user');
            dispatch({
                type: ActionType.LOGIN_FULFILLED
            });

        } catch (error) {
            if (isAxiosError(error)) {
                let errors = error.response?.data.errors;

                dispatch({
                    type: ActionType.LOGIN_REJECTED,
                    payload: {errors}
                });

            }
        }
    }
}

export const register = (name: string, email: string, password: string, passwordConfirmation: string) => {
    return async (dispatch: Dispatch<Action>) => {
        let errors = null;
        try {
            await axios.post('/register', {
                name, email, password, password_confirmation: passwordConfirmation
            });
        } catch (error) {
            if (isAxiosError(error)) {
                errors = error.response?.data.errors;
            }
        }

        dispatch({
            type: ActionType.REGISTER,
            payload: {
                name, email, password, passwordConfirmation, errors
            }
        })
    }
}

export const logout = (userType: string) => {
    if(userType === 'user') {
        return async (dispatch: Dispatch<Action>) => {
            await axios.post('/logout');
            dispatch({
                type: ActionType.LOGOUT
            })
        }
    }else{
        return {
            type: ActionType.LOGOUT,
        }
    }
}

export const getUser = () => {
    return async (dispatch: Dispatch<Action>) => {

        dispatch({
            type: ActionType.GET_USER_PENDING
        });

        try {
            const {data} = await axios.get('/api/user');
            dispatch({
                type: ActionType.GET_USER_FULFILLED,
                payload: {
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    emailVerifiedAt: data.email_verified_at,
                    createdAt: data.created_at
                }
            })
        }catch (error) {
            if (isAxiosError(error)) {
                let errors = error.response?.data.errors;
                dispatch({
                    type: ActionType.GET_USER_ERROR
                })
            }
        }


    }
}
export const guestLogin = () => {
    return {
        type: ActionType.GUEST_LOGIN,
    }
}

export const resetAuthErrors = () => {
    return {
        type: ActionType.RESET_AUTH_ERRORS,
    }
}

export * from './budget-creators';
