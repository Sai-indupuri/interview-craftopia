
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

type RequireAuthProps = {
  children: React.ReactNode;
  requireCompany?: boolean;
  requireIndividual?: boolean;
};

export function RequireAuth({ children, requireCompany = false, requireIndividual = false }: RequireAuthProps) {
  const { user, loading, accountType } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading) {
      // Not authenticated
      if (!user) {
        console.log('User not authenticated, redirecting to auth page');
        navigate('/auth', { state: { from: location } });
        return;
      }

      // Account type restrictions
      if (requireCompany && accountType !== 'company') {
        console.log('Company account required but user is not a company, redirecting to home');
        navigate('/');
        return;
      }
      
      if (requireIndividual && accountType !== 'individual') {
        console.log('Individual account required but user is not an individual, redirecting to home');
        navigate('/');
        return;
      }
      
      console.log('User authenticated, access granted', { accountType });
    }
  }, [user, loading, navigate, location, accountType, requireCompany, requireIndividual]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return user ? <>{children}</> : null;
}
