// third-party
import { combineReducers } from 'redux';

// project import
import theme from './themeDetails/themeSlice';
import userSliceReducer from './userDetails/user.slice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ theme, userSliceReducer });

export default reducers;
