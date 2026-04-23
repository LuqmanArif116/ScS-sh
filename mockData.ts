import { Account, Order, User, Dispute } from '../types';

export const mockAccounts: Account[] = [
  {
    id: '1',
    name: 'Tech News Daily',
    platform: 'Twitter',
    price: 2500,
    description: 'Active tech news account with engaged followers',
    followers: 15000,
    seller: 'seller1',
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Fitness Motivation',
    platform: 'Instagram',
    price: 1800,
    description: 'Fitness and wellness account with high engagement rate',
    followers: 25000,
    seller: 'seller2',
    createdAt: new Date('2024-01-18'),
  },
  {
    id: '3',
    name: 'Gaming Hub',
    platform: 'TikTok',
    price: 3200,
    description: 'Popular gaming content creator account',
    followers: 50000,
    seller: 'seller3',
    createdAt: new Date('2024-01-20'),
  },
  {
    id: '4',
    name: 'Cooking Recipes',
    platform: 'YouTube',
    price: 4500,
    description: 'Monetized cooking channel with steady revenue',
    followers: 100000,
    seller: 'seller1',
    createdAt: new Date('2024-01-22'),
  },
  {
    id: '5',
    name: 'Travel Diaries',
    platform: 'Instagram',
    price: 2100,
    description: 'Travel photography account with beautiful content',
    followers: 30000,
    seller: 'seller4',
    createdAt: new Date('2024-01-25'),
  },
  {
    id: '6',
    name: 'Crypto Insights',
    platform: 'Twitter',
    price: 5500,
    description: 'Cryptocurrency news and analysis account',
    followers: 45000,
    seller: 'seller2',
    createdAt: new Date('2024-01-28'),
  },
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    accountId: '1',
    accountName: 'Tech News Daily',
    platform: 'Twitter',
    price: 2500,
    status: 'completed',
    date: new Date('2024-02-01'),
    seller: 'seller1',
  },
  {
    id: 'ORD-002',
    accountName: 'Fitness Motivation',
    accountId: '2',
    platform: 'Instagram',
    price: 1800,
    status: 'disputed',
    date: new Date('2024-02-05'),
    seller: 'seller2',
  },
  {
    id: 'ORD-003',
    accountId: '3',
    accountName: 'Gaming Hub',
    platform: 'TikTok',
    price: 3200,
    status: 'completed',
    date: new Date('2024-02-10'),
    seller: 'seller3',
  },
];

export const mockUser: User = {
  id: 'user-001',
  username: 'johndoe',
  email: 'john@example.com',
  balance: 15,
  joinedAt: new Date('2024-01-01'),
};

export const mockDisputes: Dispute[] = [
  {
    id: 'DSP-001',
    orderId: 'ORD-002',
    accountName: 'Fitness Motivation',
    buyer: 'johndoe',
    seller: 'seller2',
    reason: 'Account credentials not working after purchase',
    status: 'open',
    createdAt: new Date('2024-02-06'),
    messages: [
      {
        id: 'msg-1',
        sender: 'buyer',
        message: 'I tried logging in but the password was changed. Please provide correct credentials.',
        timestamp: new Date('2024-02-06'),
      },
      {
        id: 'msg-2',
        sender: 'seller',
        message: 'Let me check and get back to you with the updated credentials.',
        timestamp: new Date('2024-02-06'),
      },
    ],
  },
];
