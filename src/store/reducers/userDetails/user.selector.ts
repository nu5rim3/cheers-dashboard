import { store } from "../..";

export const userSelector = () => store.getState().userSliceReducer.loggedInUser;