// import { accountsReducer } from "./accounts.reducer";
// import { authReducer } from "./auth.reducers";
// import { adminsReducer, studentsReducer } from "./users.reducer";

import { programsReducer } from "./program.reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    // auth: authReducer,
    // students: studentsReducer,
    // admins: adminsReducer,
    programs: programsReducer,
});

export default rootReducer;
