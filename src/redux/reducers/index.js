import { combineReducers } from "redux";
import user from "@reducers/user_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // localStorage에 저장
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user,
});

export default persistReducer(persistConfig, rootReducer);
