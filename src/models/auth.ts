export type Register = {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
  subscription?: string;
};

export type Login = {
  identity: string;
  password: string;
};

export type AuthResponse = {
  record: {
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
  token: string;
};
