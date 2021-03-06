export function getRedirectPath({ type, avatar }) {
  let url = type === "boss" ? "/boss" : "/genius";
  !avatar && (url += "info");
  avatar && (url = type === "boss" ? "/genius" : "/boss");
  return url;
}

//获取chatid
export function getChatId(userId, targetId) {
  return [userId, targetId].sort().join("_");
}
