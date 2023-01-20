import DragNDropFile from "./pages/DragNDropFile.svelte";
import Login from "./pages/Login.svelte";

function isUserLogged() {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  } else {
    return false;
  }
}

const routes = [
  {
    name: "/",
    component: Login,
  },
  {
    name: "/login",
    component: Login,
  },
  {
    name: "/upload",
    component: DragNDropFile,
    onlyIf: { guard: isUserLogged, redirect: "/login" },
  },
];

export { routes };
