import EndPointProfile from "../../models/EndPointProfile";
class Type18nextProfile extends EndPointProfile {
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
    ? "/_api/type-18-next"
    : "/api/type-18-next";
const type18nextProfile = new Type18nextProfile(
  api,
  "type-18-next",
  "https://github.com/1846689910/type-18-next",
);
export default type18nextProfile;
