import {ADMIN_ROUTE,LOGIN_ROUTE, REGISTRATION_ROUTE,FORM_ROUTE,USER_ROUTE} from "./utils/consts";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Form from "./pages/Form";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: USER_ROUTE,
        Component: User
    },
]

export const publicRoutes = [
    {
        path: FORM_ROUTE,
        Component: Form
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]