export interface LoginInfo {
  username: string;
  groupId: string;
}

export const createLoginInfo = (): LoginInfo => ({
  username: "",
  groupId: "",
});

export interface User {
  name: string;
  connectionId: string;
}
