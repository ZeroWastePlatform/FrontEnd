const makeQuery = (state: object) => {
  const keys = Object.entries(state);
  return `?${keys
    .filter(([_, value]) => value !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&")}`;
};

export default makeQuery;
