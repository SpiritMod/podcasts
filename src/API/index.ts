export const get = (url: string, body?: any) => {
  return fetch(url, {
    method: "GET",
  });
};
