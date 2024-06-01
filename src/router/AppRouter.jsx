import { Error } from "components/features";
import routes from "constants/routes";
import Layout from "layout";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element: Element }, index) => (
        <Route
          key={index}
          path={path}
          element={
            <Layout>
              <Element />
            </Layout>
          }
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
