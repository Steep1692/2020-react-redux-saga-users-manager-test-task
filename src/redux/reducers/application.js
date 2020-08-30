const SET_IS_LOADING_SPINNER_VISIBLE = 'UM/APP/SET-IS-LOADING-SPINNER-VISIBLE'

/**
 * Initial state
 * @type {{isLoadingSpinnerVisible: boolean}}
 */
const initialState = {
  isLoadingSpinnerVisible: false,
}

export const application = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING_SPINNER_VISIBLE:
      return {
        ...state,
        isLoadingSpinnerVisible: action.payload.flag,
      }
    default:
      return {
        ...state,
      }
  }
}

export const setIsLoadingSpinnerVisible = (flag) => ({
  type: SET_IS_LOADING_SPINNER_VISIBLE,
  payload: {
    flag,
  },
})