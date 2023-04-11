export const formatCost = (value: number | string | undefined) => {
  return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const stringifyJSON = (data: any[]) => {
  return JSON.stringify(data);
}

export const parseJSON = (data: string) => {
  return JSON.parse(data);
}

export const saveLocal = (item: string, data: any[]) => {
  const JSON_DATA = stringifyJSON(data);
  localStorage.setItem(item, JSON_DATA);
}

export const removeLocal = (item: string) => {
  localStorage.removeItem(item);
}

export const getLocal = (item: string) => {
  return localStorage.getItem(item);
}