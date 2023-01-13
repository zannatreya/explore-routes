import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import FriendDetails from "./Components/FriendDetails/FriendDetails";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import PostDetails from "./Components/PostDetails/PostDetails";
import Posts from "./Components/Posts/Posts";
import Products from "./Components/Products/Products";
import Main from "./layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "friends",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
          element: <Friends />,
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails />,
        },
        {
          path: "posts",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "/post/:postId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/posts/${params.postId}`
            );
          },
          element: <PostDetails />,
        },
      ],
    },
    { path: "about", element: <About /> },
    { path: "*", element: <div>This route not found: 404</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
