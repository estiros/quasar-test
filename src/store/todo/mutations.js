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
export { setTodo, setIsEmpty };
