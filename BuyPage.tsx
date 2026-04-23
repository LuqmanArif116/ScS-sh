import { useState } from 'react';
import { mockAccounts } from '../data/mockData';
import { Page } from '../App';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

interface BuyPageProps {
  onNavigate: (page: Page) => void;
}

export function BuyPage({ onNavigate }: BuyPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');

  const platforms = ['all', 'Twitter', 'Instagram', 'TikTok', 'YouTube'];

  const filteredAccounts = mockAccounts.filter((account) => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = platformFilter === 'all' || account.platform === platformFilter;
    return matchesSearch && matchesPlatform;
  });

  const handleBuy = (accountName: string) => {
    alert(`Purchase request sent for: ${accountName}`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Buy Accounts</h2>

      <div className="flex gap-4">
        <div className="flex-1">
          <Input
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={platformFilter} onValueChange={setPlatformFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((platform) => (
              <SelectItem key={platform} value={platform}>
                {platform === 'all' ? 'All Platforms' : platform}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccounts.map((account) => (
          <Card key={account.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{account.name}</CardTitle>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {account.platform}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-sm mb-3">{account.description}</p>
              <div className="flex justify-between text-sm text-slate-500">
                <span>{account.followers.toLocaleString()} followers</span>
                <span>Seller: {account.seller}</span>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <span className="text-xl font-bold">${account.price.toLocaleString()}</span>
              <Button onClick={() => handleBuy(account.name)}>Buy Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredAccounts.length === 0 && (
        <p className="text-center text-slate-500 py-8">No accounts found.</p>
      )}
    </div>
  );
                  }
