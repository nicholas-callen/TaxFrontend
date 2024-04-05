import React, { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const userData = {
        email: email,
        password: password,
      };
    

    try {
      const response = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();

      console.log('Signup success:', data);
      // Handle successful signup which redirects to loginPage?
    } catch (error) {
      console.error('Signup error:', error);
      // Handle errors somehow
    }
  };
  
  

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}