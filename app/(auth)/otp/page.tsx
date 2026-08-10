"use client";

import React, { useRef, useState } from "react";

const OTP_LENGTH = 6;

function OtpPage() {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    // TODO: verify OTP API call
    console.log({ code });
  };

  return (
    <div className="w-full max-w-xl">
      <h2 className="font-bold text-lg lg:text-xl uppercase tracking-wide mb-8 text-center lg:text-left text-gray-900">
        Enter emailed verification code
      </h2>

      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-lg rounded-md bg-white/80 border border-gray-200 outline-none focus:ring-2 focus:ring-orange-400"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white text-sm font-bold uppercase tracking-wide py-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default OtpPage;