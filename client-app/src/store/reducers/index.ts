import { CombinedState, combineReducers} from "redux";
import {Action} from "../actions";
import appReducer, {appInitialState} from "./appReducer";
import authReducer, {authInitialState} from "./authReducer";
import {ActionType} from "../action-types";
import budgetReducer, {budgetInitialState} from "./budgetReducer";

const allReducers = combineReducers({
    app: appReducer,
    auth: authReducer,
    budget: budgetReducer
});

const reducers = (state: CombinedState<{ app: any; auth: any; budget: any; }> | undefined, action: Action) => {
    switch (action.type){
        case ActionType.LOGOUT:
            state = {
                app: appInitialState,
                auth: authInitialState,
                budget: budgetInitialState
            };
    }
    return allReducers(state, action);
}

export default reducers;

export type RootState = ReturnType<typeof reducers>;