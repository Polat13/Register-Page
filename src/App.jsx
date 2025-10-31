import { useState } from 'react';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black shadow-lg shadow-white/10 gap-20">
   <RegisterForm />
   <LoginForm />
   </div>
  );
}

export default App;