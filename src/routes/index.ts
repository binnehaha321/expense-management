import OnProcess from "../components/OnProcess"
import Tutorial from "../components/Tutorial"
import { RoutesProps } from "../models"
import CreateSpreadsheet from "../pages/CreateSpreadsheet"
import Monthly from "../pages/Monthly"

export const privateRoutes: RoutesProps[] = [
  {
    path: "/tao-spreadsheet",
    // element: CreateSpreadsheet
    element: OnProcess
  },
  {
    path: "/",
    element: Monthly,
    index: true
  },
  {
    path: "/huong-dan",
    element: Tutorial,
  },
]