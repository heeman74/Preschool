import { ChildrenApi } from "../../api/children";
import convert from "xml-js";

const postId = "952STEVE2741";

export const getCityState = async (
  req: { params: { zipcode: number } },
  _res: any
) => {
  const { zipcode } = req.params;
  const childrenApi = new ChildrenApi();
  try {
    const cityStateResponse = await childrenApi.getCityState(postId, zipcode);
    _res
      .status(200)
      .send(convert.xml2json(cityStateResponse, { compact: true, spaces: 4 }));
  } catch (error) {
    _res.status(400).send("Something went wrong!!");
    console.log(error);
  }
};
