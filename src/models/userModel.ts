export interface user {
  id: string;
  username: string;
  attributes: {
    name: string;
    sub?: string;
    email_verified?: boolean;
    birthdate?: string;
    gender: string;
    email: string;
    picture: string;
    phone_number?: string;
    website?: string;
    profile?: string;
  };
}

export const listGender = [
  {
    key: "Nữ",
    value: "Nữ",
  },
  {
    key: "Nam",
    value: "Nam",
  },
  {
    key: "Tùy chỉnh",
    value: "",
  },
  {
    key: "Ẩn",
    value: "Ẩn",
  },
];
