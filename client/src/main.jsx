import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'react-quill-new/dist/quill.snow.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from "./routes/Homepage.jsx"
import PostListPage from "./routes/PostListPage.jsx"
import RegisterPage from "./routes/RegisterPage.jsx"
import SinglePostPage from "./routes/SinglePostPage.jsx"
import Write from "./routes/Write.jsx"
import LoginPage from "./routes/LoginPage.jsx"
import MainLayout from './layout/MainLayout.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SavedPosts from './routes/SavedPosts.jsx'

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key")
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/saved",
        element: <SavedPosts />
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: dark }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer position='bottom-right' />
      </QueryClientProvider>
    </ClerkProvider>
  </StrictMode>
)
