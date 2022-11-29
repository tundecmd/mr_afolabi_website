import axios from "axios";
import { programsConstants } from "./constants";

export const getProgram = () => {
    return async (dispatch) => {
        dispatch({ type: programsConstants.GET_PROGRAMS_REQUEST });
        const res = await axios.get("http://localhost:2500/api/admin/programs");

        if (res.status === 200) {
            const { data } = res;
            console.log("data", data.programs);
            dispatch({
                type: programsConstants.GET_PROGRAMS_SUCCESS,
                payload: { programs: data.programs },
            });
        } else {
        }
    };
};
