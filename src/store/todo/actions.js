/*
export function someAction (context) {
}
*/
import axios from "axios";
import { LocalStorage } from "quasar";
const getTodo = async ({ commit }) => {
  try {
    const res = await axios.get("http://localhost:3000/todos");
    LocalStorage.set("todo", res.data);
  } catch (error) {
    console.log("ga konek");
  }
  const todo = LocalStorage.getItem("todo");
  commit("setTodo", todo);
};

const searchTodo = async ({ commit }, payload) => {
  const res = await axios.get(`http://localhost:3000/todos/?q=${payload}`);
  const todo = res.data;
  if (res.data.length > 0) {
    commit("setIsEmpty", false);
  } else {
    commit("setIsEmpty", true);
  }
  console.log(res);
  commit("setTodo", todo);
};

const filterTodo = async ({ commit }, payload) => {
  const res = await axios.get(
    `http://localhost:3000/todos/?completed=${payload}`
  );
  const todo = res.data;
  commit("setTodo", todo);
};

export { getTodo, searchTodo, filterTodo };
