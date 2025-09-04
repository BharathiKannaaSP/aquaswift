import { useSignIn } from '@clerk/clerk-react';
import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { isLoaded, signIn, setActive } = useSignIn();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLoaded || !signIn) {
      return;
    }

    try {
      const result = await signIn.create({ identifier: email, password });
      if (result.status === 'complete') {
        await setActive({ session: signIn.createdSessionId });
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="h-full lg:h-screen relative">
        <h1 className="py-4 px-4" onClick={() => navigate('/')}>
          AquaSwift
        </h1>
        <div className="w-90 lg:w-100 lg:h-140 lg:absolute lg:top-3/5 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
          <div className="p-4 flex flex-col gap-2">
            <h2 className="font-normal">SIGN IN</h2>
            <form onSubmit={handleLogin}>
              <div className="flex flex-col text-sm">
                <div className="flex flex-col">
                  <input
                    placeholder="Email"
                    type="email"
                    className="border p-2"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border p-2"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="bg-black text-main-bg p-2 mt-2 cursor-pointer">Sign in</button>
              </div>
            </form>
            {error && <span className="text-red-500 mt-2">{error}</span>}
            <button
              onClick={() => navigate('/register')}
              className="bg-transparent text-black border-1 p-2 mt-4 cursor-pointer text-sm"
            >
              Create account
            </button>
            <button className="mt-4 text-sm underline underline-offset-4 cursor-pointer">
              Forgotten your Password ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
