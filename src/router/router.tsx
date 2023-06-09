import { createBrowserRouter } from 'react-router-dom';
// Pages
import HomePage from '../pages/HomePage/HomePage';
import Dashboard from '../pages/DashboardPage/Dashboard';
import BlogPage from '../pages/BlogPage/BlogPage';
import Layout from '../pages/Layout';
// Routes
import { routes } from './routes';

export const router = createBrowserRouter([
    {
        path: routes.homePage,
        element: <Layout/>,
        children: [
            {
                path: routes.homePage,
                element: <HomePage />
            },
            {
                path: routes.dashboardPage,
                element: <Dashboard />
            },
            {
                path: routes.blogPage,
                element: <BlogPage />
            },
        ]
    }
]);
