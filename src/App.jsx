import { useState } from 'react';
import AuthPage from './page/authPage.jsx';

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-black shadow-lg shadow-white/10 gap-20">
      <AuthPage />
   </div>
  );
}

export default App;