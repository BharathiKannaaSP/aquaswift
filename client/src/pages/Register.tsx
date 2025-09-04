import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSignUp, useUser } from '@clerk/clerk-react';

const Register = () => {
  const { signUp, setActive } = useSignUp();
  const { user } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [code, setCode] = useState(''); // store verification code
  const [pendingVerification, setPendingVerification] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!signUp) throw new Error('SignUp not available');

      // Step 1: create sign-up
      await signUp.create({
        emailAddress: email,
        password: password,
        username: username,
      });

      // Step 2: send email verification
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!signUp) throw new Error('SignUp not available');

      // Step 3: verify code
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== 'complete') {
        throw new Error('Verification not complete');
      }

      // Activate the session
      await setActive({ session: completeSignUp.createdSessionId });
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (user) {
    navigate('/');
  }

  return (
    <div className="h-full lg:h-screen relative">
      <h1 className="py-4 px-4" onClick={() => navigate('/')}>
        AquaSwift
      </h1>
      <div className="w-90 lg:w-100 lg:h-140 lg:absolute lg:top-3/5 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-normal">CREATE YOUR ACCOUNT</h2>

          {!pendingVerification ? (
            <form onSubmit={handleRegister}>
              <input
                placeholder="Username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="border p-2"
              />
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
              />

              {error && <span className="text-red-500 mt-2">{error}</span>}
              <button type="submit" className="bg-black text-main-bg p-2 mt-4 cursor-pointer">
                Create account
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify}>
              <p className="text-sm">Enter the verification code sent to your email</p>
              <input
                type="text"
                placeholder="Verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="border p-2"
              />
              {error && <span className="text-red-500 mt-2">{error}</span>}
              <button type="submit" className="bg-black text-main-bg p-2 mt-4 cursor-pointer">
                Verify & Continue
              </button>
            </form>
          )}

          <span className="mt-4 text-sm">
            Already have an account?{' '}
            <button
              className="underline underline-offset-4 cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Sign in
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
