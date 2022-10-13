import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sampelReucer } from "../reducer/reducer";
import { sample2 } from "../reducer/Sampel2";
import { Linkedat } from "../reducer/Linke";

export const store = createStore(
  combineReducers({
    sampelReucer,sample2,Linkedat
  }),
  composeWithDevTools()
);
