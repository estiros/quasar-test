/*
export function someMutation (state) {
}
*/
const setTodo = (state, payload) => {
  state.todo = payload;
};
const setIsEmpty = (state, payload) => {
  state.isEmpty = payload;
};
const setDetail = (state, payload) => {
  state.detail = payload;
};
export { setTodo, setIsEmpty, setDetail };
