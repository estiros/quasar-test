/*
export function someMutation (state) {
}
*/
export const createCatatan = (state, payload) => {
  if (state.catatanState.length === 0) {
    state.catatanState = [payload];
  } else {
    state.catatanState.push(payload);
  }
};
