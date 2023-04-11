import { RoutesProps } from "../models"
import CreateSpreadsheet from "../pages/CreateSpreadsheet"
import Monthly from "../pages/Monthly"

export const privateRoutes: RoutesProps[] = [
  {
    path: "/tao-spreadsheet",
    element: CreateSpreadsheet
  },
  {
    path: "/",
    element: Monthly,
    index: true
  },
]