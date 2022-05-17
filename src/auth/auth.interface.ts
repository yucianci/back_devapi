export type IUserValidator = {
  id: string;
  email: string;
};

export type IPayload = {
  sub: string /* USER ID */;
  username: string;
};
