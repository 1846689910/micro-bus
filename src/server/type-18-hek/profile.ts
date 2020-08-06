import EndPointProfile from "../EndPointProfile";
class Type18hekProfile extends EndPointProfile {
  /**
   * @description check if the graphql end point status is good
   */
  checkStatus = async () =>
    fetch(this.api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: "{ hello }",
      }),
    }).then((res) => res.ok);
}
const api =
  process.env.NODE_ENV !== "production"
    ? "/_api/type-18-hek"
    : "/api/type-18-hek";
export default new Type18hekProfile(
  api,
  "type-18-hek",
  "https://github.com/1846689910/type-18-hek",
);
