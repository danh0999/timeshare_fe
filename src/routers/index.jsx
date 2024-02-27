import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomePage from "../pages/Home";
import ViewProfile from "../pages/ViewProfile";
import ROUTER from "./routerList";
import UserManager from "../pages/ADMIN/UserManager";
import TimeShare from "../pages/ADMIN/TimeShare";
import RoomManager from "../pages/ADMIN/RoomManager";

const routers = [
  { path: ROUTER.HOME, components: HomePage },
  { path: ROUTER.LOGIN, components: Login },
  { path: ROUTER.REGISTER, components: Register },
  { path: ROUTER.VIEW_PROFILE, components: ViewProfile },
  { path: ROUTER.USER_MANAGER, components: UserManager },
  { path: ROUTER.TIME_SHARE, components: TimeShare },
  { path: ROUTER.ROOM_MANAGER, components: RoomManager },
];

export { routers };
