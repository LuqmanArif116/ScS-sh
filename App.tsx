import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { HomePage } from './pages/HomePage';
import { BuyPage } from './pages/BuyPage';
import { SellPage } from './pages/SellPage';
import { WalletPage } from './pages/WalletPage';
import { OrdersPage } from './pages/OrdersPage';
import { ProfilePage } from './pages/ProfilePage';
import { DisputesPage } from './pages/DisputesPage';
import { Layout } from './components/Layout';

export type Page = 'login' | 'signup' | 'home' | 'buy' | 'sell' | 'wallet' | 'orders' | 'profile' | 'disputes';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleSignup = () => {
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onLogin={handleLogin} onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignupPage onSignup={handleSignup} onNavigate={setCurrentPage} />;
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'buy':
        return <BuyPage onNavigate={setCurrentPage} />;
      case 'sell':
        return <SellPage />;
      case 'wallet':
        return <WalletPage />;
      case 'orders':
        return <OrdersPage onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfilePage />;
      case 'disputes':
        return <DisputesPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  if (!isLoggedIn) {
    return renderPage();
  }

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage} onLogout={handleLogout}>
      {renderPage()}
    </Layout>
  );
}
