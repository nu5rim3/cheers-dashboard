// third-party
import { combineReducers } from 'redux';

// project import
import theme from './themeSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ theme });

export default reducers;
