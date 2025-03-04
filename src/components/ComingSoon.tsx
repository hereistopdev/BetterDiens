"use client";
import { useState } from "react";
import Image from "next/image";

export function ComingSoon() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");

  return (
    <div className="relative flex w-full h-screen bg-[url(/background.png)]  text-white">
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="Construction Tools"
          fill
        />
      </div>
      <div className="absolute w-full flex flex-col  text-center px-4 sm:px-6">
        <div className="absolute inset-0">
          <Image
            src="/background1.png"
            alt="Coming Soon"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 p-3">
          <Image src="/title.png" alt="Title" width={171} height={50} />
          <Image src="/Coming_Soon_text.png" alt="Coming Soon text" width={536} height={85.39} />
          <p className="font-bold font-[family-name:var(--font-exo)] text-[48px] text-[#36A1D4] leading-14">Local independent retailers <br /> offering more than convenience</p>
          <div className="justify-center flex m-[20px]">
            <p className="w-[670px] leading-8 font-[family-name:var(--font-roboto)]">BetterDiens is a niche <span className="font-bold">co-operative</span> mindset ecommerce marketplace where local
              independent retailers sell home improvement & outdoor activities products at competitive
              prices with superior customer service. Join the waitlist to get <span className="font-bold">xaClub membership ($30 value) free for one year</span>, which offers bigger deals and early access to promotions.</p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row md:flex-row justify-center">
            <div>
              <input
                type="email"
                placeholder="E-mail address.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full h-14 sm:w-120 bg-white 
                border border-r-0 rounded-l-lg border-gray-600 text-black font-bold font-[family-name:var(--font-outfit)] focus:outline-none"
              />
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}

                className="px-4 py-2 w-full sm:w-auto h-14 bg-white border border-l-0 border-gray-600 shadow-md text-black font-bold font-[family-name:var(--font-outfit)] "
              >
                <option value="">State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
              </select>
            </div>
            <button
              type="button"
              className="bg-purple-600 px-5 py-2 w-full sm:w-auto rounded-r-lg font-semibold font-[family-name:var(--font-outfit)] hover:bg-purple-700 transition"
            >
              Notify Me
            </button>
          </div>

          <div className="flex gap-4 justify-center mt-6">
            <a href="#" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={48} height={48} />
            </a>
            <a href="#" aria-label="Instagram">
              <Image src="/Facebook.png" alt="FaceBook" width={48} height={48} />
            </a>
            <a href="#" aria-label="YouTube">
              <Image src="/youtube.png" alt="YouTube" width={48} height={48} />
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
