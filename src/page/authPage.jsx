import { useState } from 'react';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';

function AuthPage() {
  const [showLogin, setShowLogin] = useState(false);

  const switchToLogin = () => {
    setShowLogin(true);
  };

  const switchToRegister = () => {
    setShowLogin(false);
  };

  return (
    <div>
      {showLogin ? (
        <LoginForm onSwitchToRegister={switchToRegister} />
      ) : (
        <RegisterForm onSwitchToLogin={switchToLogin} />
      )}
    </div>
  );
}

export default AuthPage;