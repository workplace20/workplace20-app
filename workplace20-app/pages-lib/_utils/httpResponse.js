export const getStatus = (response) => response?.response?.status;

export const isNotFound = (response) => getStatus(response) === 404;

export const isBadRequest = (response) => getStatus(response) === 400;

export const getErrorMessege = (error) => error?.response?.data?.errors?.detail;
