import React, { useState } from 'react';
import { useAuthContext } from '../../context/authContext';

const Signup = () => {
  const { signup, error } = useAuthContext();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(userData);
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
