import request from "./axios"

// Create new spreadsheet
export const createNewSpreadsheet = async (title?: string) => {
  try {
    const res = await request.post(`/create?title=${title}`)
    return await res?.data?.data;
  } catch (error) {
    return await error;
  }
}

// Add new Rows as JSON objects
export const uploadDataToSpreadsheet = async (tabId: string, data?: string | undefined) => {
  try {
    if (tabId && data) {
      const res = await request.post(`/addRows?tabId=${tabId}`, data)
      return res?.data?.data;
    }
    return;
  } catch (error) {
    return await error;
  }
}

// Get rows
export const getDataFromSheet = async (tabId: string) => {
  try {
    if (tabId) {
      const res = await request.get(`?tabId=${tabId}`)
      return res?.data?.data;
    }
    return;
  } catch (error) {
    return await error;
  }
}

// Add new rows
export const addNewRows = async (tabId: string, data: string | undefined) => {
  try {
    if (tabId && data) {
      const res = await request.post(`?tabId=${tabId}`, data);
      return res?.data?.data;
    }
    return;
  } catch (error) {
    return await error;
  }
}