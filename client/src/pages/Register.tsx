import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSignUp, useUser } from '@clerk/clerk-react';

const Register = () => {
  const { signUp, setActive } = useSignUp();
  const { user } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!signUp) throw new Error('SignUp not available');

      const { createdSessionId } = await signUp.create({
        emailAddress: email,
        password: password,
        username: username,
      });

      if (!createdSessionId) throw new Error('Session not created');

      await setActive({ session: createdSessionId });

      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleRouteToLogin = () => {
    navigate('/login');
  };

  if (user) {
    navigate('/');
  }

  return (
    <div className="h-full lg:h-screen relative">
      <h1 className="py-4 px-4" onClick={() => navigate('/')}>
        AquaSwift
      </h1>
      <div className="w-90 lg:w-100 lg:h-140 lg:absolute lg:top-3/5 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-normal">CREATE YOUR ACCOUNT</h2>

          <form onSubmit={handleRegister}>
            <div className="flex flex-col text-sm">
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="border p-2"
              />{' '}
              <br />
              <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2"
              />{' '}
              <div id="clerk-captcha"></div>
              {/* <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="IN"
                value={value}
                onChange={setValue}
                className="border p-2 mt-4"
              /> */}
              {error && <span className="text-red-500 mt-2">{error}</span>}
              <button type="submit" className="bg-black text-main-bg p-2 mt-4 cursor-pointer">
                Create account
              </button>
            </div>
          </form>

          <span className="mt-4 text-sm">
            Already have an account?{' '}
            <button
              className="underline underline-offset-4 cursor-pointer"
              onClick={handleRouteToLogin}
            >
              Sign in
            </button>
          </span>

          <div className="text-sm tracking-wide text-center mt-4">
            By creating an account and subscribing, you confirm that you have read our{' '}
            <b>Privacy Policy</b> and accept our <b>Terms & Conditions.</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
