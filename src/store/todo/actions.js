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

const getDetail = async ({ commit }, payload) => {
  let detail = null;
  try {
    const res = await axios.get(`http://localhost:3000/todos/${payload}`);
    detail = res.data;
  } catch (error) {
    console.log(error);
    const data = LocalStorage.getItem("todo");
    data.map((item) => {
      if (item.id == payload) {
        detail = item;
      }
    });
  }
  commit("setDetail", detail);
};

const editTodo = async ({}, payload) => {
  try {
    await axios.patch(`http://localhost:3000/todos/${payload.id}`, {
      userId: payload.data.user_id,
      title: payload.data.title,
      completed: payload.data.completed,
    });
  } catch (error) {
    const data = LocalStorage.getItem("todo");
    data.map((item) => {
      if (item.id == payload.id) {
        item.userId = payload.data.user_id;
        item.title = payload.data.title;
        item.completed = payload.data.completed;
      }
    });
    LocalStorage.set("todo", data);
  }
};
const deleteTodo = async ({}, payload) => {
  try {
    await axios.delete(`http://localhost:3000/todos/${payload}`);
  } catch (error) {
    const data = LocalStorage.getItem("todo");

    let index = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == payload) {
        index = i;
      }
    }
    data.splice(index, 1);
    LocalStorage.set("todo", data);
  }
};
const createTodo = async ({}, payload) => {
  try {
    await axios.post("http://localhost:3000/todos", {
      userId: payload.data.user_id,
      title: payload.data.title,
      completed: payload.data.completed,
    });
  } catch (error) {
    let data = LocalStorage.getItem("todo");
    if (data.length === 0) {
      data = [
        {
          id: 1,
          userId: payload.data.user_id,
          title: payload.data.title,
          completed: payload.data.completed,
        },
      ];
    } else {
      const idLast = data[data.length - 1].id;
      data.push({
        id: parseInt(idLast) + 1,
        userId: payload.data.user_id,
        title: payload.data.title,
        completed: payload.data.completed,
      });
    }
    LocalStorage.set("todo", data);
  }
};
export {
  getTodo,
  searchTodo,
  filterTodo,
  getDetail,
  editTodo,
  deleteTodo,
  createTodo,
};
