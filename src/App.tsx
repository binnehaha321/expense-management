import { Routes, Route } from "react-router-dom"
import { privateRoutes } from "./routes";
import DefaultLayout from "./components/layouts";
import useWindowSize from "./hooks/useWindowSize";
import NotSupport from "./components/NotSupport";

function App() {
  const { width } = useWindowSize();
  const isMobile = width && width < 768;
  if (isMobile) return <NotSupport />

  return (
    <Routes>
      {privateRoutes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={<DefaultLayout><route.element /></DefaultLayout>}
        />
      ))}
    </Routes>
  )
}

export default App
