import { Routes, Route } from "react-router-dom"
import { privateRoutes } from "./routes";
import DefaultLayout from "./components/layouts";

function App() {
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
