/*
export function someAction (context) {
}
*/

import { editCatatan } from "./mutations";

// const namafungsi = (parameter) => {action nya mau ngapain di dalam fungsi}
// parameter ada banyak, salah satunya ({state, commit})
// state buat manggil state, commit buat manggil mutation
const actionCreateCatatan = ({ commit }, payload) => {
  // commit("nama fungsi di mutation")
  commit("createCatatan", payload);
};

const actionEditCatatan = ({ commit }, payload) => {
  commit("editCatatan", payload);
};

const actionDeleteCatatan = ({ commit }, payload) => {
  commit("deleteCatatan", payload);
};
export { actionCreateCatatan, actionEditCatatan, actionDeleteCatatan };
