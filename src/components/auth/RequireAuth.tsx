
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
        navigate('/auth', { state: { from: location } });
        return;
      }

      // Account type restrictions
      if (requireCompany && accountType !== 'company') {
        navigate('/');
        return;
      }
      
      if (requireIndividual && accountType !== 'individual') {
        navigate('/');
        return;
      }
    }
  }, [user, loading, navigate, location, accountType, requireCompany, requireIndividual]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return user ? <>{children}</> : null;
}
