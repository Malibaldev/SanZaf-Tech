import React, { useState ,useEffect} from 'react';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const storedemail = localStorage.getItem("email");
    if (storedemail) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleSubmit=(e)=>{e.preventdefault();
    if (email && password) {
      localStorage.setItem("email", email);
      setIsLoggedIn(true); 
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLoggedIn(false);
  };
    return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email</label>
            <input
              type="text"  id="email"   name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email" 
              required />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"  id="password"   name="password" value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required/> 
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/forgot-password" className="text-sm text-indigo-500 hover:text-indigo-600">Forgot Password?</a>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-indigo-500 hover:text-indigo-600">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
