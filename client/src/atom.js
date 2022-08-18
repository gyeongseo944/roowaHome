import { atom } from "recoil";

export const recruitDataAtom = atom({
  key: "recruitData", // 유니크한 key 값
  default: null, // 기본값
});

export const articleListAtom = atom({
  key: "articleListlist",
  default: null,
});
