export type UserRole = 'admin' | 'approver' | 'user';

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  department: string;
  name: string;
}

export interface Room {
  id: string;
  name: string;
  capacity: number;
  floor: string;
  building: string;
  facilities: string[];
  status: 'available' | 'maintenance';
}

export interface Booking {
  id: string;
  userId: string;
  roomId: string;
  startTime: Date;
  endTime: Date;
  purpose: string;
  status: 'pending' | 'approved' | 'rejected' | 'cancelled';
  attendees: number;
  createdAt: Date;
}