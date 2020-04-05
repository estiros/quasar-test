/*
export function someGetter (state) {
}
*/
const getTodo = (state) => state.todo;
const getIsEmpty = (state) => state.isEmpty;

export { getTodo, getIsEmpty };
