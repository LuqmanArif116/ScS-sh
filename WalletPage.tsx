import { mockUser } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function WalletPage() {
  const handleDeposit = () => {
    alert('Deposit functionality - frontend only');
  };

  const handleWithdraw = () => {
    alert('Withdraw functionality - frontend only');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Wallet</h2>

      <Card>
        <CardHeader>
          <CardTitle>Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">${mockUser.balance.toLocaleString()}</p>
          <p className="text-slate-500 mt-2">Available for purchases</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Deposit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="depositAmount">Amount</Label>
                <Input id="depositAmount" type="number" placeholder="Enter amount" />
              </div>
              <Button onClick={handleDeposit} className="w-full">
                Deposit
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Withdraw</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="withdrawAmount">Amount</Label>
                <Input id="withdrawAmount" type="number" placeholder="Enter amount" />
              </div>
              <Button onClick={handleWithdraw} variant="outline" className="w-full">
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <div>
                <p className="font-medium">Deposit</p>
                <p className="text-sm text-slate-500">Feb 1, 2024</p>
              </div>
              <span className="text-green-600 font-medium">+$5,000</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <div>
                <p className="font-medium">Purchase - Tech News Daily</p>
                <p className="text-sm text-slate-500">Feb 1, 2024</p>
              </div>
              <span className="text-red-600 font-medium">-$2,500</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <div>
                <p className="font-medium">Deposit</p>
                <p className="text-sm text-slate-500">Jan 15, 2024</p>
              </div>
              <span className="text-green-600 font-medium">+$10,000</span>
            </div>
            <div className="flex justify-between py-2">
              <div>
                <p className="font-medium">Sale - Gaming Hub</p>
                <p className="text-sm text-slate-500">Jan 10, 2024</p>
              </div>
              <span className="text-green-600 font-medium">+$3,200</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
