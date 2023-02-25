import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";
import Post from "./pages/Post";
import PostSegment from "./pages/PostSegment";
import User from "./pages/User";
import UserChildren from "./pages/UserChildren";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/post/:id",
    element: <PostSegment />,
  },
  {
    path: "/user",
    element: <User />,
    children: [
      {
        path: ":id",
        element: <UserChildren />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
