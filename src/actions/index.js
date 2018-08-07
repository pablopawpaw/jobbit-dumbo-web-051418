export const getHobbits = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/hobbits')
    .then(resp => resp.json())
    .then(result => {
      dispatch({
        type: 'LOAD_HOBBITS',
        payload: {
          hobbits: result
        }
      })
    })
  }
}

export const selectHobbit = (hobbit) => {
  return {
    type: 'SELECT_HOBBIT',
    payload: {
      hobbit
    }
  }
}

export const changeHobbit = (hobbit_data) => {
  return (dispatch) => {
    const url = `http://localhost:3000/hobbits/${hobbit_data.id}`
    const options = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(hobbit_data)
    }
    fetch(url,options)
    .then(resp => resp.json())
    .then(results => {
      dispatch({
        type: 'CHANGE_HOBBIT',
        payload: {
          hobbit: results
        }
      })
    })
  }
  }
