import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white z-[22]">
      <div className="flex items-center">
        <Link href="/" className="flex items-center xl:w-[235px] lg:w-[170px]">
          <img
            src="/assets/logo.png"
            alt="Obics Logo"
            className="h-8 w-auto mx-auto"
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center space-x-[62px]">
        <Link
          href="/"
          className="text-[18px] text-[#1E7477] underline hover:text-gray-600"
        >
          Home
        </Link>
        <Link
          href="/why"
          className="text-[18px] text-black hover:text-gray-600"
        >
          Why IDLog
        </Link>
        <Link
          href="/sandbox"
          className="text-[18px] text-black hover:text-gray-600"
        >
          Sandbox
        </Link>
        <Link
          href="/contact"
          className="text-[18px] text-black hover:text-gray-600"
        >
          Contact
        </Link>
        <Link
          href="/trial"
          className="px-[40.5px] py-[14px] rounded-full bg-[#FF8039] hover:bg-[#FF8010] hover:bg-[#e85f24] transition-colors text-[18px] text-black hover:text-gray-800"
        >
          Free Trial
        </Link>
      </div>
    </nav>
  );
}
