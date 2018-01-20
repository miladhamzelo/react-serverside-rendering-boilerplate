import { combineReducers } from 'redux';
import usersReducer from './usersReducers';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
export default combineReducers({
    users: usersReducer,
    auth: authReducer,
    admins: adminsReducer
});