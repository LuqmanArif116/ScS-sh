import { mockUser } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export function ProfilePage() {
  const handleUpdate = () => {
    alert('Profile updated - frontend only');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold">Profile</h2>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue={mockUser.username} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={mockUser.email} />
            </div>
            <div>
              <Label htmlFor="joined">Member Since</Label>
              <Input id="joined" defaultValue={mockUser.joinedAt.toLocaleDateString()} disabled />
            </div>
            <Button onClick={handleUpdate}>Update Profile</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="confirmNewPassword">Confirm New Password</Label>
              <Input id="confirmNewPassword" type="password" />
            </div>
            <Button variant="outline">Change Password</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-slate-50 rounded">
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-slate-500">Orders</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded">
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-slate-500">Listings</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded">
              <p className="text-2xl font-bold">1</p>
              <p className="text-sm text-slate-500">Sales</p>
            </div>
            <div className="text-center p-4 bg-slate-50 rounded">
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-slate-500">Purchases</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
