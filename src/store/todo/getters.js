/*
export function someGetter (state) {
}
*/
const getTodo = (state) => state.todo;
const getIsEmpty = (state) => state.isEmpty;
const getDetail = (state) => state.detail;

export { getTodo, getIsEmpty, getDetail };
