import http from "./http";

export const gettoken = (data: { password: string; username: string }) =>
  http.post("/admin/login",data);
