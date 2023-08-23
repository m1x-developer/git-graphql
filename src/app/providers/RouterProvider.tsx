import { useRoutes } from "react-router-dom";

export const RouterProvider = () => {
  return useRoutes([
    {
      //TODO add layout
      // element: <div>test</div>,
      children: [
        {
          path: "/",
          element: <div>test2</div>,
        },
      ],
    },
  ]);
};
