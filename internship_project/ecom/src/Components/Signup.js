import React, {useState,useEffect } from 'react';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem('signupData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup", formData);
    localStorage.setItem('signupData', JSON.stringify(formData));
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text" id="username" name="username"  
              value={formData.username}
              onChange={(e) => setFormData(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username" />
              required 
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email" id="email" name="email"  
              value={formData.email}
               onChange={(e) => setFormData(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email" />
              required  
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">  Password  </label>
            <input
              type="password" id="password"  name="password" 
              value={formData.password}
             onChange={(e) => setFormData(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password" required />    
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
