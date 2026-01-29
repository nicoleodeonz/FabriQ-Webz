import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Rentals } from './components/Rentals';
import { CustomOrders } from './components/CustomOrders';
import { Appointments } from './components/Appointments';
import { CustomerProfile } from './components/CustomerProfile';
import { AdminDashboard } from './components/AdminDashboard';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { AuthModal } from './components/AuthModal'; 

export type View = 'home' | 'catalog' | 'rentals' | 'custom-orders' | 'appointments' | 'profile' | 'admin';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [pendingView, setPendingView] = useState<View | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem('hasSeenLanding')) setShowLanding(false);
  }, []);

  const handleLandingComplete = () => {
    setShowLanding(false);
    sessionStorage.setItem('hasSeenLanding', 'true');
  };

  const navigateProtected = (view: View) => {
    if (!isLoggedIn) {
      setPendingView(view);
      setShowAuth(true);
      return;
    }
    setCurrentView(view);
  };

  const handleSignIn = (email: string, password: string) => {
    console.log("Signing in with:", email, password);
    setIsLoggedIn(true);
    setShowAuth(false);
    if (pendingView) {
      setCurrentView(pendingView);
      setPendingView(null);
    }
  };

  const handleSignUp = (email: string, password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match! Please try again.");
      return;
    }
    console.log("Signing up with:", email, password);
    setIsLoggedIn(true);
    setShowAuth(false);
    if (pendingView) {
      setCurrentView(pendingView);
      setPendingView(null);
    }
  };

  if (showLanding) return <LandingPage onComplete={handleLandingComplete} />;

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        navigateProtected={navigateProtected}
      />
      <main className="pt-20">
        {currentView === 'home' && (
          <Home
            setCurrentView={setCurrentView}
            isLoggedIn={isLoggedIn}
            onOpenAuthModal={() => setShowAuth(true)} 
          />
        )}
        {currentView === 'catalog' && <Catalog setCurrentView={setCurrentView} isLoggedIn={isLoggedIn} navigateProtected={navigateProtected} />}
        {currentView === 'rentals' && <Rentals />}
        {currentView === 'custom-orders' && <CustomOrders />}
        {currentView === 'appointments' && <Appointments />}
        {currentView === 'profile' && <CustomerProfile />}
        {currentView === 'admin' && <AdminDashboard />}
      </main>
      <Footer />

      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
      />
    </div>
  );
}