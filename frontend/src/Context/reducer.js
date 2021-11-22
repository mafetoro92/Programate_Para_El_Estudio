export const GET_PROFILE = "GET_PROFILE";
export const GET_PROFILES = "GET_PROFILES";
export const GET_CONVOCATORYS = "GET_CONVOCATORYS";
export const PUT_PARAMETERIZATION = "PUT_PARAMETERIZATION";

export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
            };
        case GET_CONVOCATORYS:
            return {
                ...state,
                convocatorys: payload,
            };

        default:
            return state;
    }
};
