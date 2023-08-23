import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "~app/providers/RouterProvider.tsx";
import { Apollo } from "~app/providers/ApolloProvider.tsx";

export const Root = () => {
  return (
    <Apollo>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </Apollo>
  );
};
