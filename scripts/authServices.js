export const saveDataInStorage = (dataName, dataValue) => localStorage.setItem(dataName, JSON.stringify(dataValue));

export const getDataFromStorage = (dataName) => localStorage.getItem(dataName) ? JSON.parse(localStorage.getItem(dataName)) : {};