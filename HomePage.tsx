import { Page } from '../App';
import { mockAccounts } from '../data/mockData';
import { mockUser } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const recentAccounts = mockAccounts.slice(0, 3);

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Welcome, {mockUser.username}</h2>
        <p className="text-slate-600">Buy and sell social media accounts securely.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">${mockUser.balance.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Available Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{mockAccounts.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Your Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Recent Listings</h3>
          <Button variant="outline" onClick={() => onNavigate('buy')}>
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {recentAccounts.map((account) => (
            <Card key={account.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{account.name}</CardTitle>
                  <span className="text-sm bg-slate-100 px-2 py-1 rounded">
                    {account.platform}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm mb-2">{account.description}</p>
                <p className="font-semibold">${account.price.toLocaleString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="cursor-pointer hover:border-slate-400" onClick={() => onNavigate('buy')}>
          <CardHeader>
            <CardTitle>Buy Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">Browse available social media accounts for purchase.</p>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:border-slate-400" onClick={() => onNavigate('sell')}>
          <CardHeader>
            <CardTitle>Sell Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">List your social media accounts for sale.</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
