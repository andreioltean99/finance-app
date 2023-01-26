import { CombinedState, combineReducers} from "redux";
import {Action} from "../actions";
import appReducer, {appInitialState} from "./appReducer";
import authReducer, {authInitialState} from "./authReducer";
import {ActionType} from "../action-types";

const allReducers = combineReducers({
    app: appReducer,
    auth: authReducer
});

const reducers = (state: CombinedState<{ app: any; auth: any; }> | undefined, action: Action) => {
    switch (action.type){
        case ActionType.LOGOUT:
            state = {
                app: appInitialState,
                auth: authInitialState
            };
    }
    return allReducers(state, action);
}

export default reducers;

export type RootState = ReturnType<typeof reducers>;