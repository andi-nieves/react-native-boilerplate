export default {
  getHeaders: async ({ extraHeaders }) => {
    return {
      Accept: "application/json",
      "Csrf-Token": "nocheck",
      ...extraHeaders
    };
  }
};
