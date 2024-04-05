import React, {useState} from 'react';
import '../src/styles/login.css'

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                username: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const { access_token } = await response.json();
        console.log(access_token);

        // prob redriect here?

    } catch (error) {
        console.error(error.message);
    }
};

// Very Simplified version of the login page
return (
  <div className="indexLogin">
      <form onSubmit={handleSubmit}>
          {}
          <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
          />
          <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
          />
          <button type="submit">Login</button>
      </form>
  </div>
);




  // return (
  //   <div className="indexLogin">
  //     <div className="div">
  //       <div className="left-BG" />
  //       <p className="don-t-have-an">
  //         <span className="text-wrapper">Don’t have an account? </span>
  //         <span className="span">Sign Up</span>
  //       </p>
  //       <div className="loginbar">
  //         <div className="overlap-group">
  //           <div className="text-wrapper-2">Login</div>
  //         </div>
  //       </div>
  //       <div className="text-wrapper-3">Remember for 30 days</div>
  //       <div className="checkbox" />
  //       <div className="password">
  //         <input className="overlap" id="input-1" />
  //         <label className="label" htmlFor="input-1">
  //           Password
  //         </label>
  //       </div>
  //       <div className="email">
  //         <input className="overlap" id="input-2" />
  //         <label className="label" htmlFor="input-2">
  //           Email Address
  //         </label>
  //       </div>
  //       <div className="loadin">
  //         <div className="text-wrapper-4">Login</div>
  //         <div className="text-wrapper-5">Welcome back!</div>
  //       </div>
  //     </div>
  //   </div>
  // );
};