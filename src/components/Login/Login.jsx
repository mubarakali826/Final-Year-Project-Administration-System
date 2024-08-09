import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen loginContainer ">
      <div className="p-6 max-w-sm w-full bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center heading">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" className="w-full p-2 border border-gray-300 rounded mt-1" />
          </div>
          <button className="w-full p-2 rounded mt-3 login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
