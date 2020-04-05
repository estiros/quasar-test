/*
export function someGetter (state) {
}
*/

// kalau dalam satu file js export nya cuma ada satu
// diakalin pakai const, misal

const getCatatan = (state) => {
  return state.catatanState;
};
const getTest = (state) => {
  return state.test;
};

export { getCatatan, getTest };

// export function getCatatan(state) {
//   return state.catatanState;
// }
