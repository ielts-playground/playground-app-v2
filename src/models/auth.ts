export type RegisterType = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
  subscription?: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type VerifyEmailRequest = {
  email: string;
  code: string;
};

export type VerifyEmailRepose = {
  email: string;
  code: string;
};

export type UserInfoUser = {
  activated: boolean;
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  dateOfBirth: '';
  email: string;
  emailVisibility: false;
  fullName: string;
  id: string;
  phoneNumber: string;
  subscription: string;
  updated: string;
  username: string;
  verified: false;
};

export type AuthResponse = {
  user: UserInfoUser;
  token: string;
};
