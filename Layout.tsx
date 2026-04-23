import { Page } from '../App';
import { Home, ShoppingCart, Tag, Wallet, ClipboardList, User, LogOut, AlertTriangle } from 'lucide-react';

interface LayoutProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
  children: React.ReactNode;
}

export function Layout({ currentPage, onNavigate, onLogout, children }: LayoutProps) {
  const navItems = [
    { id: 'home' as Page, label: 'Home', icon: Home },
    { id: 'buy' as Page, label: 'Buy', icon: ShoppingCart },
    { id: 'sell' as Page, label: 'Sell', icon: Tag },
    { id: 'wallet' as Page, label: 'Wallet', icon: Wallet },
    { id: 'orders' as Page, label: 'Orders', icon: ClipboardList },
    { id: 'disputes' as Page, label: 'Disputes', icon: AlertTriangle },
    { id: 'profile' as Page, label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-slate-800 text-white px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-semibold">Dark Social Market</h1>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </header>

      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex gap-1 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                    currentPage === item.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
}
