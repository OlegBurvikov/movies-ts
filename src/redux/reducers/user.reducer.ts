import CONST from '../const'

const initialState = {
  is_auth: null,
  name: null,
  email: null,
  avatar: null,
  token: null,
  id: null,
}
export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case CONST.USER_LOGIN:
      return {
        ...state,
        ...action.payload,
        is_auth: true,
      }

    case CONST.USER_LOGOUT:
      return {
        ...initialState,
        is_auth: false,
      }
    default:
      return state
  }
}
