import { httpClient } from "./httpClient";

type User = {
  id: number;
  name: string;
  email: string;
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = () => httpClient.get<User[]>(`${BASE_URL}/users`);

export type { User };


