const initialState = {
  hobbits: [],
  selectedHobbit: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_HOBBITS':
    return {
      ...state,
      hobbits: action.payload.hobbits
    }

    case 'SELECT_HOBBIT':
    return {
      ...state,
      selectedHobbit: action.payload.hobbit
    }

    case 'CHANGE_HOBBIT':
    const hobbitToEdit = state.hobbits.find(hobbit => hobbit.id === action.payload.hobbit.id)
    const indexOfHobbit = state.hobbits.indexOf(hobbitToEdit)
    const edittedHobbits = [...state.hobbits]
    const edittedHobbit = {
      ...hobbitToEdit,
      title: action.payload.hobbit.title,
      key_skill: action.payload.hobbit.key_skill,
    }
    edittedHobbits.splice(indexOfHobbit, 1, edittedHobbit)
    return {
      ...state,
      hobbits: edittedHobbits
    }

    default:
    return state
  }

};

export default reducer
