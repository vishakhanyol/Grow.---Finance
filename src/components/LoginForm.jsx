import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [touched, setTouched] = useState({
    username: false,
    password: false,
    confirmPassword: false,
  });

  const handleBlur = (field) => () => {
    setTouched({ ...touched, [field]: true });
  };

  const isEmpty = (field) => touched[field] && !eval(field);

  // Regex
  const usernameRegex = /^[a-zA-Z0-9]{8,20}$/; 
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?!.*(.)\1{3})[A-Za-z\d@$!%*#?&]{8,}$/; 
  const isUsernameValid = () => usernameRegex.test(username);
  const isPasswordValid = () => passwordRegex.test(password);

  const handleSubmit = () => {
    if (!isUsernameValid()) {
      alert('Username must be 8-20 characters long and contain only alphanumeric characters.');
      return;
    }

    if (!isPasswordValid()) {
      alert('Password must be at least 8 characters long, contain at least one uppercase letter, one number, and no repeated sequences.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  const renderValidationMessage = (field, valid, message) => {
    if (touched[field]) {
      if (valid) {
        return <span className="text-green-500 text-xs italic">✔ {message}</span>;
      } else {
        return <span className="text-red-500 text-xs italic">{message}</span>;
      }
    }
    return null;
  };

  return (
    <div className="bg-[#FFFFF7] rounded-lg p-6 shadow-2xl backdrop-blur-md bg-opacity-30 max-w-md mx-auto mt-10">
      <h2 className="text-purple-600 text-2xl font-bold mb-4">Create your login details</h2>
      <p className="text-gray-600 mb-4">Keep your details safe - you'll need them later</p>
      <p className="text-gray-600 mb-4">Please create a username and password to log into your new account.</p>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
          USERNAME*
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleBlur('username')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            isEmpty('username') || !isUsernameValid() ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {renderValidationMessage('username', isUsernameValid(), 'Username must be 8-20 characters long and contain only alphanumeric characters.')}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
          PASSWORD*
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlur('password')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            isEmpty('password') || !isPasswordValid() ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {renderValidationMessage('password', isPasswordValid(), 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and no repeated sequences.')}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
          CONFIRM PASSWORD*
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={handleBlur('confirmPassword')}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            isEmpty('confirmPassword') || password !== confirmPassword ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {isEmpty('confirmPassword') && <p className="text-red-500 text-xs italic">Confirm Password is required.</p>}
        {password !== confirmPassword && (
          <p className="text-red-500 text-xs italic">Passwords do not match.</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
