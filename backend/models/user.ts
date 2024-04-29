// server/models/user.ts
export interface User {
  id: number;
  username: string;
  email: string;
  password: string; // Hashed password
  userType: string; // 'resident', 'business', 'ngo'
}
