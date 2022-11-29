import { programsConstants } from "../actions/constants";

const initState = {
    loading: false,
    programs: [],
    success: false,
    error: null,
};

export const programsReducer = (state = initState, action) => {
    switch (action.type) {
        case programsConstants.GET_PROGRAMS_REQUEST:
            return (state = {
                ...state,
                loading: true,
            });
        case programsConstants.GET_PROGRAMS_SUCCESS:
            // console.log("action.payload.products", action.payload.products);
            return (state = {
                ...state,
                loading: false,
                success: true,
                programs: action.payload.programs,
            });

        case programsConstants.GET_PROGRAMS_FAILURE:
            return (state = {
                ...state,
                loading: false,
                message: action.payload.message,
            });
        default:
            return { ...state };
    }
};
