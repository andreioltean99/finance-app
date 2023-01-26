import { combineReducers} from "redux";
import appReducer from "./appReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
    app: appReducer,
    auth: authReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;