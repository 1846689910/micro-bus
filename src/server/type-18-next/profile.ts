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
export default new Type18hekProfile(
  "/api/type-18-next",
  "type-18-next",
  "https://github.com/1846689910/type-18-next",
);
