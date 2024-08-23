const ENV = (import.meta.env.NODE_ENV as string) || "development";

export const constants = {
  test: ENV === "test",
  dev: ENV === "development",
  prod: ENV === "production",
  graphQLAPI: import.meta.env.VITE_GRAPHQL_API as string,
};
