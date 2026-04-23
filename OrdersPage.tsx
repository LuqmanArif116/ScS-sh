import { mockOrders } from '../data/mockData';
import { Page } from '../App';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

interface OrdersPageProps {
  onNavigate: (page: Page) => void;
}

export function OrdersPage({ onNavigate }: OrdersPageProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'disputed':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Orders</h2>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{order.accountName}</CardTitle>
                  <p className="text-sm text-slate-500">Order ID: {order.id}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                <div>
                  <p className="text-slate-500">Platform</p>
                  <p className="font-medium">{order.platform}</p>
                </div>
                <div>
                  <p className="text-slate-500">Seller</p>
                  <p className="font-medium">{order.seller}</p>
                </div>
                <div>
                  <p className="text-slate-500">Date</p>
                  <p className="font-medium">{order.date.toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-slate-500">Price</p>
                  <p className="font-bold">${order.price.toLocaleString()}</p>
                </div>
              </div>
              
              {order.status !== 'disputed' && order.status !== 'cancelled' && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onNavigate('disputes')}
                >
                  Open Dispute
                </Button>
              )}
              
              {order.status === 'disputed' && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onNavigate('disputes')}
                >
                  View Dispute
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {mockOrders.length === 0 && (
        <Card>
          <CardContent className="py-8 text-center text-slate-500">
            No orders yet.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
