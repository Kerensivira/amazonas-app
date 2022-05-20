import { typesRegister } from "../Types/types"



export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case typesRegister.register:
            return {
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
            }

        default:
            return state
    }
}