import requestPromise from "request-promise";

export class ChildrenApi {
  constructor() {}

  getCityState(userId: string, zipcode: number) {
    return requestPromise({
      method: "GET",
      url: "http://production.shippingapis.com/ShippingAPI.dll",
      qs: {
        API: "CityStateLookup",
        XML: `<CityStateLookupRequest USERID="${userId}"><ZipCode ID = "0"><Zip5>${zipcode}</Zip5></ZipCode></CityStateLookupRequest>`,
      },
    });
  }
}
