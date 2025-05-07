<<<<<<< HEAD
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../Store/AuthStore';
import React from 'react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');
  const { adminLogin, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setFormError('Both fields are required.');
      return false;
    }

    if (formData.email !== 'admin' || formData.password !== 'admin') {
      setFormError('Invalid admin credentials.');
      return false;
    }

    setFormError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await adminLogin(formData);
      navigate('/admin');
    } catch (err) {
      console.error('Admin login error:', err.message);
      setFormError('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>
        {formError && <p className="text-red-500 text-center mb-4">{formError}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Admin ID
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="admin"
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="admin"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Need help? Contact support.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
=======
import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-900 bg-opacity-90 p-10 rounded-2xl shadow-2xl border border-slate-700">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-white font-archivo tracking-wide">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue your adventure
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <InputField id="email" label="Email Address" type="email" placeholder="Enter your email" />
            <InputField id="password" label="Password" type="password" placeholder="Enter your password" />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 rounded-xl text-white font-medium bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <Link to="/admin/register" className="text-indigo-400 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-6">
          <div className="flex-1 h-px bg-gray-600" />
          <p className="text-sm text-gray-400">or continue with</p>
          <div className="flex-1 h-px bg-gray-600" />
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 justify-center mt-2">
          <SocialButton provider="Google" />
          <SocialButton provider="GitHub" />
        </div>
      </div>
    </div>
  );
}

const InputField = ({ id, label, type, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required
      placeholder={placeholder}
      className="mt-1 block w-full rounded-md px-3 py-2 bg-slate-800 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
    />
  </div>
);

const SocialButton = ({ provider }) => {
  const logos = {
    Google: 'https://www.svgrepo.com/show/475656/google-color.svg',
    GitHub: 'https://www.svgrepo.com/show/512317/github-142.svg'
  };
  return (
    <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 border border-gray-600 hover:bg-slate-700 transition text-white text-sm font-medium">
      <img src={logos[provider]} alt={provider} className="h-5 w-5" />
      {provider}
    </button>
  );
};

export default LoginPage;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
