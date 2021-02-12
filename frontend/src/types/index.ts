export interface CheckTask {
  isDone: boolean;
  name: string;
};

export interface TodoTask {
  id: number;
  name: string;
}

export interface User {
  id: string;
  token: string;
  username: string,
}
