import { NextLogo } from "./next-logo";
import { SupabaseLogo } from "./supabase-logo";

export function Hero() {
  return (
    <div className="relative w-full max-w-7xl mx-auto h-[300px] sm:h-[400px] md:h-[400px] m-0 sm:m-2 flex items-center justify-center bg-black text-white rounded-lg overflow-hidden">

      {/* Background Image */}
      <img
        src="/sample-pics/SinSpire Girl.png"
        alt="SinSpire Girl"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-20 left-4 sm:bottom-24 sm:left-6 flex flex-col gap-1 max-w-lg">
        <span className="text-sm opacity-80">
          Latest Deals
        </span>

        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Lunar New Year Discounts
        </h1>

        <p className="text-sm sm:text-base opacity-90">
          Get the best deals and play the newest games. Available until February 28
        </p>
      </div>

      {/* Button */}
      <button className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#C1121F] text-white font-semibold rounded-lg shadow hover:bg-red-600 transition">
        Limited Time Offer
      </button>

    </div>
  );
}