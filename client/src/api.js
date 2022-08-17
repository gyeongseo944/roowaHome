import axios from "axios";

export async function getRecruit() {
  return await axios.get("/api/recruit/getList");
}
