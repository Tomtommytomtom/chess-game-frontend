export interface LoginInfo {
  userName: string;
  groupId: string;
}

export const createLoginInfo = (): LoginInfo => ({
  userName: "",
  groupId: "",
});

export interface User {
  name: string;
  connectionId: string;
}
