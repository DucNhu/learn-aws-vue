export interface user {
  id: string;
  username: string;
  attributes: {
    sub: string;
    email_verified: boolean;
    birthdate: string;
    gender: string;
    email: string;
    picture: string;
  };
}
