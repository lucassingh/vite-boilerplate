import { AboutPage, HomePage } from "../pages";

interface RouteConfig {
    path: string;
    element: React.ReactNode;
}

export const routes: RouteConfig[] = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
];