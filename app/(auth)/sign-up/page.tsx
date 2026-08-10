"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import SuperintendentImage from "@/public/images/Superintendent.png";
import ProjectManagerImage from "@/public/images/ProjectManager.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const signUpSchema = z
  .object({
    role: z.enum(["superintendent", "pm"]),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Include at least one uppercase letter")
      .regex(/[0-9]/, "Include at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    agreed: z.boolean().refine((value) => value === true, {
      message: "You must agree to the Terms & Conditions and Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      role: "superintendent",
      email: "",
      password: "",
      confirmPassword: "",
      agreed: undefined,
    },
  });

  const role = useWatch({
    control,
    name: "role",
  });

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Sign up form submitted:", data);
    Cookies.set("role", data.role);
    router.push("/email-verify");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen w-full">
      {/* Left Image - Full width of first grid column */}
      <div className="hidden min-h-screen w-full py-6 lg:block ml-20">
        <div className="relative h-full w-full overflow-hidden rounded-[24px]">
          <Image
            src={
              role === "superintendent"
                ? SuperintendentImage
                : ProjectManagerImage
            }
            alt="Team member reviewing project details on a laptop"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Right Form */}
      <div
        className="relative flex min-h-screen w-full items-center justify-center px-6 py-10 lg:px-12"
        style={{
          backgroundImage: "url('/images/Ellipse.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 w-full max-w-md">
          <h1 className="font-bebas text-center font-black uppercase tracking-tight text-neutral-900 text-4xl sm:text-5xl">
            Proof App
          </h1>
          <h2 className="font-bebas mt-4 text-center text-lg font-medium uppercase leading-[130%] tracking-wide text-[#212721] sm:text-[30px]">
            Create Your Free Account
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8" noValidate>
            <fieldset>
              <legend className=" font-bebas mb-4 leading-[130%] text-center text-[16px] font-medium uppercase tracking-wide text-[#212721]">
                Tell us who you are:
              </legend>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                  <div className="font-bebas flex overflow-hidden rounded-md border border-neutral-200">
                    <button
                      type="button"
                      onClick={() => field.onChange("superintendent")}
                      aria-pressed={field.value === "superintendent"}
                      className={`cursor-pointer flex-1 py-3 text-xs font-normal uppercase tracking-wide transition-colors ${
                        field.value === "superintendent"
                          ? "bg-[#F2A11E] text-white"
                          : "bg-white text-[#212721] hover:bg-neutral-50"
                      }`}
                    >
                      Superintendent
                    </button>
                    <button
                      type="button"
                      onClick={() => field.onChange("pm")}
                      aria-pressed={field.value === "pm"}
                      className={`cursor-pointer flex-1 py-3 text-xs font-normal uppercase tracking-wide transition-colors ${
                        field.value === "pm"
                          ? "bg-[#F2A11E] text-white"
                          : "bg-white text-[#212721] hover:bg-neutral-50"
                      }`}
                    >
                      Project Manager (PM)
                    </button>
                  </div>
                )}
              />
            </fieldset>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="font-bebas mb-2 block text-[15px] font-medium leading-normal uppercase tracking-wide text-[#333333]"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address here"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
                className="normal-case text-[#63748C] font-medium w-full rounded-md bg-[#F4F6F8] px-4 py-3 text-xs placeholder:text-neutral-400 outline-none ring-0 focus:bg-white focus:ring-2 focus:ring-[#F0A421]"
              />
              {errors.email && (
                <p
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-600"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="password"
                className="font-bebas mb-2 block text-[15px] font-medium leading-normal uppercase tracking-wide text-[#333333]"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="new-password"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                  className="normal-case text-[#63748C] font-medium w-full rounded-md bg-[#F4F6F8] px-4 py-3 pr-11 text-xs placeholder:text-neutral-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#F0A421]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-800"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-600"
                >
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="confirmPassword"
                className="font-bebas mb-2 block text-[15px] font-medium leading-normal uppercase tracking-wide text-[#333333]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  aria-invalid={!!errors.confirmPassword}
                  {...register("confirmPassword")}
                  className="normal-case text-[#63748C] font-medium w-full rounded-md bg-[#F4F6F8] px-4 py-3 pr-11 text-xs placeholder:text-neutral-400 outline-none focus:bg-white focus:ring-2 focus:ring-[#F0A421]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-800"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-red-600"
                >
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <label className="mt-5 flex items-start gap-2 text-xs text-[#333333]">
              <input
                type="checkbox"
                aria-invalid={!!errors.agreed}
                {...register("agreed")}
                className="h-4 w-4 rounded border-2 border-neutral-300 text-[#F0A421]"
              />
              <span className="mt-0.5 font-bebas text-[#63748C] text-xs font-medium leading-[100%]">
                By continuing, I agree to the Terms &amp; Conditions and Privacy
                Policy
              </span>
            </label>
            {errors.agreed && (
              <p
                role="alert"
                className="mt-1.5 text-xs font-medium text-red-600"
              >
                {errors.agreed.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer mt-6 w-full rounded-md bg-[#F2A11E] py-3.5 text-xs font-bold uppercase tracking-widest text-[#F4F6F8] transition-colors hover:bg-[#dc9418] disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#F0A421] focus:ring-offset-2"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center gap-2">
            <h1 className="font-bebas block text-[14px] font-medium leading-normal uppercase tracking-wide text-[#F0A421]">
              Already have an account?
            </h1>
            <Link
              href="/sign-in"
              className="font-bebas text-[#333333] text-sm font-medium leading-[100%] underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
