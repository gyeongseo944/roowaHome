import axios from "axios";

export async function getRecruit() {
  return await axios.get("/api/recruit/getList");
  // setArticle(res.data.result);
  // setIdArr(res.data.idArr);
  // setLoading(false);
}
