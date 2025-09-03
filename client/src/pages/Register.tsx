import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from 'react-router';
const Register = () => {
  const [value, setValue] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleRouteToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="h-full lg:h-screen relative">
      <h1 className="py-4 px-4" onClick={() => navigate('/')}>
        AquaSwift
      </h1>
      <div className="w-90 lg:w-100 lg:h-140 lg:absolute lg:top-3/5 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <div className="p-4 flex flex-col gap-2">
          <h2 className="font-normal">CREATE YOUR ACCOUNT</h2>
          <form action="">
            <div className="flex flex-col text-sm">
              <div className="flex flex-col">
                <input placeholder="Email" type="email" className="border p-2" />
                <br />
                <input type="text" placeholder="Password" className="border p-2" />
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="IN"
                  value={value}
                  onChange={setValue}
                  className="border p-2 mt-4"
                />
              </div>

              <button className="bg-black text-main-bg p-2 mt-4 cursor-pointer">
                Create account
              </button>
            </div>
          </form>

          <button className="mt-4 text-sm  cursor-pointer">
            Already have an account?{' '}
            <button
              className="underline underline-offset-4 cursor-pointer"
              onClick={handleRouteToLogin}
            >
              Sign in
            </button>
          </button>

          <div className="text-sm tracking-wide text-center mt-4">
            By creating an account and subscribing, you confirm that you have read our{' '}
            <b> Privacy Policy </b>and accept our <b>Terms & Conditions.</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
