const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      //Notes
      { path: "notes", component: () => import("pages/Notes.vue") },
      // Todo
      { path: "todo", component: () => import("pages/todo/Index.vue") },

      {
        path: "/todo/create",
        component: () => import("pages/todo/Create.vue")
      },
      { path: "/todo/:id", component: () => import("pages/todo/Detail.vue") },
      {
        path: "/todo/:id/edit",
        component: () => import("pages/todo/Edit.vue")
      },
      //Catatan
      { path: "catatan", component: () => import("pages/catatan/Index.vue") },
      // todo-vuex
      {
        path: "todo-vuex",
        component: () => import("pages/todo-vuex/Index.vue")
      },
      {
        path: "/todo-vuex/create",
        component: () => import("pages/todo-vuex/Create.vue")
      },
      {
        path: "/todo-vuex/:id",
        component: () => import("pages/todo-vuex/Detail.vue")
      },
      {
        path: "/todo-vuex/:id/edit",
        component: () => import("pages/todo-vuex/Edit.vue")
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
