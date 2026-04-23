export interface Account {
  id: string;
  name: string;
  platform: string;
  price: number;
  description: string;
  followers: number;
  seller: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  accountId: string;
  accountName: string;
  platform: string;
  price: number;
  status: 'pending' | 'completed' | 'cancelled' | 'disputed';
  date: Date;
  seller: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  balance: number;
  joinedAt: Date;
}

export interface Dispute {
  id: string;
  orderId: string;
  accountName: string;
  buyer: string;
  seller: string;
  reason: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: Date;
  messages: DisputeMessage[];
}

export interface DisputeMessage {
  id: string;
  sender: 'buyer' | 'seller';
  message: string;
  timestamp: Date;
}
