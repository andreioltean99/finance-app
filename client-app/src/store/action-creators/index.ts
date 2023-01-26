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

       let errors = null;
       await csrf();
       try {
           await axios.post('/login', {
               email, password
           });
           // navigate('/');
       } catch (error) {
           if (isAxiosError(error)) {
               errors = error.response?.data.errors;
           }
       }

       dispatch({
           type: ActionType.LOGIN,
           payload: {
               email, password, errors
           }
       })
   }
}
