module.exports = {
  async rewrites() {
    return [
      {
        source: "/users",
        destination: "/",
      },
    ];
  },
};
