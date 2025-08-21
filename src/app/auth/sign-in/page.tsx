"use client";

import React from 'react';
import { cn } from "@/lib/utils";

// This function will be the page's default export
export default function Form() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <style>
                {`
        .spin-gradient {
            background: conic-gradient(
                from 45deg,
                transparent 75%,
                #fff,
                transparent 100%
            );
            animation: spin 4s ease-in-out infinite;
        }

        @keyframes spin {
            100% {
                transform: rotate(360deg);
            }
        }
        
        .box-glow {
            box-shadow: 
                0 4px 8px rgba(0, 0, 0, 0.2),
                0 8px 16px rgba(0, 0, 0, 0.2),
                0 0 8px rgba(255, 255, 255, 0.1),
                0 0 16px rgba(255, 255, 255, 0.08);
        }

        .login-box-shadow {
            box-shadow:
                inset 0 40px 60px -8px rgba(255, 255, 255, 0.12),
                inset 4px 0 12px -6px rgba(255, 255, 255, 0.12),
                inset 0 0 12px -4px rgba(255, 255, 255, 0.12);
        }

        .logo-shadow {
            box-shadow:
                8px 8px 16px rgba(0, 0, 0, 0.2),
                -8px -8px 16px rgba(255, 255, 255, 0.06);
        }
        `}
            </style>

            <div className="flex justify-center items-center relative overflow-hidden bg-[#272727] rounded-3xl w-[400px] h-[calc(400px*1.33+1px)] z-10 box-glow">
                <div className="absolute inset-[-50px] z-0 spin-gradient"></div>

                <div className="bg-[#272727] rounded-3xl p-7 w-[399px] h-[calc(400px*1.33)] absolute z-10 backdrop-blur-md login-box-shadow">
                    <form className="flex flex-col items-center justify-center gap-4">
                        <div className="w-[85px] h-[85px] rounded-[20px] bg-gradient-to-br from-white/20 to-black/20 logo-shadow border-2 border-white flex justify-center items-center relative">
                            {/* This is a placeholder for the logo, as the original CSS used pseudo-elements */}
                        </div>
                        <span className="w-full text-center text-2xl font-bold py-1.5 text-white flex justify-center items-center">Welcome Back!</span>
                        <input type="email" placeholder="Email" className="h-12 w-full p-2.5 border-none rounded-xl bg-[#3a3a3a] text-white outline-none text-sm focus:border-white focus:border" />
                        <input type="password" placeholder="Password" className="h-12 w-full p-2.5 border-none rounded-xl bg-[#3a3a3a] text-white outline-none text-sm focus:border-white focus:border" />
                        <button type="submit" className="w-full h-12 border-none rounded-xl text-sm font-semibold cursor-pointer grid place-content-center gap-2.5 bg-[#373737] text-white transition-all shadow-[inset_0px_3px_6px_-4px_rgba(255,255,255,0.6),inset_0px_-3px_6px_-2px_rgba(0,0,0,0.8)] hover:bg-white/25 hover:shadow-[inset_0px_3px_6px_rgba(255,255,255,0.6),inset_0px_-3px_6px_rgba(0,0,0,0.8),0px_0px_8px_rgba(255,255,255,0.05)] mt-1.5">Sign In</button>
                        <button className="w-full h-12 border-none rounded-xl text-sm font-semibold cursor-pointer flex justify-center items-center gap-2.5 bg-[#373737] text-white transition-all shadow-[inset_0px_3px_6px_-4px_rgba(255,255,255,0.6),inset_0px_-3px_6px_-2px_rgba(0,0,0,0.8)] hover:bg-white/25 hover:shadow-[inset_0px_3px_6px_rgba(255,255,255,0.6),inset_0px_-3px_6px_rgba(0,0,0,0.8),0px_0px_8px_rgba(255,255,255,0.05)]">
                            <svg className="h-4" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
                                    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
                                    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
                                    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
                                </g>
                            </svg>
                            <span> Sign in with Google </span>
                        </button>
                        <p className="w-full text-left text-white/50 text-md">
                            Don't have an account?
                            <a href="/auth/sign-up" className="relative text-white/50 font-semibold no-underline transition-all hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-all after:ease-in-out hover:after:w-full">Sign up, it's free!</a>
                            <br />
                            <a href="/auth/forgot-password" className="relative text-white/50 font-semibold no-underline transition-all hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:rounded-md after:h-[1px] after:bg-current after:transition-all after:ease-in-out hover:after:w-full">Forgot password?</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}