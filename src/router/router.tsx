import { createBrowserRouter } from 'react-router-dom';
// Pages
import HomePage from '../pages/HomePage';
import Dashboard from '../pages/Dashboard';
import BlogPage from '../pages/BlogPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/time-management-dashboard',
        element: <Dashboard />
    },
    {
        path: '/blog',
        element: <BlogPage />
    }
]);
