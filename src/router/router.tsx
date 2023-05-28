import { createBrowserRouter } from 'react-router-dom';
// Pages
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import BlogPage from '../pages/BlogPage';
// Routes
import { routes } from './routes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        children: [
            {
                path: routes.dashboardPage,
                element: <Dashboard />
            },
            {
                path: routes.blogPage,
                element: <BlogPage />
            }
        ]
    }
]);
