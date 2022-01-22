import React from "react";
import HomePage from "./pages/HomePage";
import UserListPage from "./pages/UserListPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminsPage from "./pages/AdminsPage";
import App from "./App";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...UserListPage,
        path: "/users",
      },
      {
        ...AdminsPage,
        path: "/admins",
      },
      {
        ...NotFoundPage,
        path: "",
      },
    ],
  },
];
