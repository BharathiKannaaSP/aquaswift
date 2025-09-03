import React from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full lg:h-screen relative">
      <h1 className="py-4 px-4" onClick={() => navigate('/')}>
        AquaSwift
      </h1>
      <div className="w-90 lg:w-100 lg:h-140 lg:absolute lg:top-3/5 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-normal">SIGN IN</h2>
          <form action="">
            <div className="flex flex-col text-sm">
              <div className="flex flex-col">
                <input placeholder="Email" type="email" className="border p-2" />
                <br />
                <input type="text" placeholder="Password" className="border p-2" />
              </div>
              <div className="flex items-center gap-2 mt-6 mb-6">
                <input type="checkbox" className="border p-2" />{' '}
                <label htmlFor="stay" className=" text-sm">
                  Stay signed in
                </label>
              </div>
              <button className="bg-black text-main-bg p-2 mt-2 cursor-pointer">Sign in</button>
            </div>
          </form>
          <button className="bg-transparent text-black border-1 p-2 mt-4 cursor-pointer text-sm">
            Create account
          </button>
          <button className="mt-4 text-sm underline underline-offset-4 cursor-pointer">
            Forgotten your Password ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
