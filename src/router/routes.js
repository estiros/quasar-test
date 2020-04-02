const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "notes", component: () => import("pages/Notes.vue") },
      { path: "todo", component: () => import("pages/todo/Index.vue") },
      {
        path: "/todo/create",
        component: () => import("pages/todo/Create.vue")
      },
      { path: "/todo/:id", component: () => import("pages/todo/Detail.vue") }
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
