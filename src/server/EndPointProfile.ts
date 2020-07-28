abstract class EndPointProfile {
  api: string;
  linkName: string;
  linkHref?: string;
  constructor(api: string, linkName: string, linkHref?: string){
    this.api = api;
    this.linkName = linkName;
    if (linkHref) this.linkHref = linkHref;
  }
  abstract checkStatus(): Promise<boolean>
}

export default EndPointProfile;
