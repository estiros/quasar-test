/*
export function someMutation (state) {
}
*/
const createCatatan = (state, payload) => {
  if (state.catatanState.length === 0) {
    state.catatanState = [payload];
  } else {
    state.catatanState.push(payload);
  }
};

const editCatatan = (state, payload) => {
  Object.assign(state.catatanState[payload.index], payload.updated);
};

const deleteCatatan = (state, payload) => {
  state.catatanState.splice(payload, 1);
};

export { createCatatan, editCatatan, deleteCatatan };
