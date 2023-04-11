export interface RoutesProps {
  path: string,
  element: React.FC,
  index?: boolean
}

export interface FixedCostProps {
  key: number;
  expense: string;
  cost?: number
}

export interface MonthlyProps {
  key: number;
  datetime: string,
  category: string,
  expense: string,
  cost: number
}