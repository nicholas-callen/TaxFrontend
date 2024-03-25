import react from 'react'
import '../src/styles/login.css'

export default function LoginPage() {
  return (
    <div className="indexLogin">
      <div className="div">
        <div className="left-BG" />
        <p className="don-t-have-an">
          <span className="text-wrapper">Don’t have an account? </span>
          <span className="span">Sign Up</span>
        </p>
        <div className="loginbar">
          <div className="overlap-group">
            <div className="text-wrapper-2">Login</div>
          </div>
        </div>
        <div className="text-wrapper-3">Remember for 30 days</div>
        <div className="checkbox" />
        <div className="password">
          <input className="overlap" id="input-1" />
          <label className="label" htmlFor="input-1">
            Password
          </label>
        </div>
        <div className="email">
          <input className="overlap" id="input-2" />
          <label className="label" htmlFor="input-2">
            Email Address
          </label>
        </div>
        <div className="loadin">
          <div className="text-wrapper-4">Login</div>
          <div className="text-wrapper-5">Welcome back!</div>
        </div>
      </div>
    </div>
  );
};