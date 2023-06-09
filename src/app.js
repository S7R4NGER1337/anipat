import { render, page } from "../src/api/lib.js";
import { logout } from "./api/user.js";
import { getUserData } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { homeView } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { updateNav } from "./views/nav.js";
import { showRegister } from "./views/register.js";

const main = document.querySelector("#content");
// document.querySelector("#logoutBtn").addEventListener("click", onLogout);

page(decorateContext);
page("/", homeView);
page("/catalog", showCatalog);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);
page("/create", showCreate);
page("/login", showLogin);
page("/register", showRegister);

updateNav()
page.start();

function decorateContext(ctx, next) {
  ctx.render = renderMain;
  ctx.updateNav = updateNav

  const user = getUserData()
  if(user){
    ctx.user = user
  }

  next();
}
function renderMain(content) {
  render(content, main);
}

