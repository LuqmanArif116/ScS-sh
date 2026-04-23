import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';

export function SellPage() {
  const [name, setName] = useState('');
  const [platform, setPlatform] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [followers, setFollowers] = useState('');

  const platforms = ['Twitter', 'Instagram', 'TikTok', 'YouTube', 'Facebook', 'Snapchat'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account listed: ${name} on ${platform} for $${price}`);
    setName('');
    setPlatform('');
    setPrice('');
    setDescription('');
    setFollowers('');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Sell Account</h2>

      <Card>
        <CardHeader>
          <CardTitle>List Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Account Name</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter account name"
                required
              />
            </div>

            <div>
              <Label htmlFor="platform">Platform</Label>
              <Select value={platform} onValueChange={setPlatform} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="followers">Followers Count</Label>
              <Input
                id="followers"
                type="number"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
                placeholder="Enter followers count"
                required
              />
            </div>

            <div>
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter your price"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your account (engagement rate, content type, etc.)"
                rows={4}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              List Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
              }
