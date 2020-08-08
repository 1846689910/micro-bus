import EndPointProfile from "../EndPointProfile";
class PersonalPageProfile extends EndPointProfile {
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
    ? "/_api/personal-page"
    : "/api/personal-page";
const type18hekProfile = new PersonalPageProfile(
  api,
  "personal-page",
  "https://github.com/1846689910/personal-page",
);
export default type18hekProfile;
