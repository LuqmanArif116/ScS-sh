import { useState } from 'react';
import { mockDisputes } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function DisputesPage() {
  const [selectedDispute, setSelectedDispute] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'closed':
        return 'bg-slate-100 text-slate-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      alert('Message sent: ' + newMessage);
      setNewMessage('');
    }
  };

  const activeDispute = mockDisputes.find(d => d.id === selectedDispute);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Disputes</h2>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          Open New Dispute
        </Button>
      </div>

      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Open a New Dispute</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="orderId">Order ID</Label>
                <Input id="orderId" placeholder="Enter order ID (e.g., ORD-001)" />
              </div>
              <div>
                <Label htmlFor="reason">Reason for Dispute</Label>
                <Textarea 
                  id="reason" 
                  placeholder="Explain why you are opening this dispute..."
                  rows={3}
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={() => {
                  alert('Dispute created successfully');
                  setShowCreateForm(false);
                }}>
                  Submit Dispute
                </Button>
                <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {mockDisputes.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-slate-500">
            No disputes found.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <h3 className="font-medium text-slate-700">Your Disputes</h3>
            {mockDisputes.map((dispute) => (
              <Card 
                key={dispute.id}
                className={`cursor-pointer transition-colors ${
                  selectedDispute === dispute.id ? 'border-blue-500' : ''
                }`}
                onClick={() => setSelectedDispute(dispute.id)}
              >
                <CardContent className="py-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{dispute.accountName}</span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(dispute.status)}`}>
                      {dispute.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500">ID: {dispute.id}</p>
                  <p className="text-sm text-slate-500">vs {dispute.seller}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-2">
            {activeDispute ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Dispute {activeDispute.id}</CardTitle>
                      <p className="text-sm text-slate-500">
                        Order: {activeDispute.orderId} - {activeDispute.accountName}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded text-sm ${getStatusColor(activeDispute.status)}`}>
                      {activeDispute.status.replace('_', ' ')}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 p-3 bg-slate-50 rounded">
                    <p className="text-sm font-medium text-slate-700">Reason:</p>
                    <p className="text-sm text-slate-600">{activeDispute.reason}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <h4 className="font-medium">Messages</h4>
                    <div className="max-h-64 overflow-y-auto space-y-3">
                      {activeDispute.messages.map((msg) => (
                        <div 
                          key={msg.id}
                          className={`p-3 rounded ${
                            msg.sender === 'buyer' 
                              ? 'bg-blue-50 ml-0 mr-8' 
                              : 'bg-slate-100 ml-8 mr-0'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-slate-600">
                              {msg.sender === 'buyer' ? 'You (Buyer)' : 'Seller'}
                            </span>
                            <span className="text-xs text-slate-400">
                              {msg.timestamp.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reply">Reply</Label>
                    <div className="flex gap-2">
                      <Textarea 
                        id="reply"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type your message..."
                        rows={2}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={handleSendMessage}>Send Message</Button>
                      <Button variant="outline" onClick={() => alert('Dispute resolved - refund issued')}>
                        Request Refund
                      </Button>
                      <Button variant="outline" onClick={() => alert('Dispute closed')}>
                        Close Dispute
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="py-8 text-center text-slate-500">
                  Select a dispute to view details
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
            }
