import { FiSearch } from "react-icons/fi";

export default function ObicsDocumentation() {
  return (
    <section className="flex-1 max-w-[853.55px] mx-auto md:px-8 px-4 py-[30px] md:py-[104px]">
      <h1 className="text-[30px] md:text-[40px] md:leading-[48px] leading-[34px] font-jost font-[600] mb-[23px] text-center">
        Obics Documentation
      </h1>

      {/* Search Bar */}
      <div className="relative flex items-center bg-[#EEEFEF] rounded-full mb-[45px] h-[45.15px] max-w-[649.38px] mx-auto">
        <div className="absolute inset-y-0 left-4 flex items-center">
          <FiSearch className="text-[#B3B3B3] h-[20px] w-[20px]" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full h-12 pl-11 pr-4 rounded-full bg-[#EEEFEF] text-gray-500 placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[22px] gap-[50px] mt-[60px]">
        <div className="text-center border rounded-[30px] border-[#EEEEEE] px-4 py-[20px]">
          <div className="md:w-[54.41px] w-[44px] md:h-[54.41px] h-[44px] bg-[#131A22] rounded-full flex items-center justify-center text-white md:text-[25px] text-[20px] font-[600] mx-auto md:mt-[-48px] mt-[-42px]">
            1
          </div>
          <h2 className="md:text-[25px] text-[20px] font-[600] font-jost text-black mb-[8.5px] md:mt-[22px] mt-[15px]">
            Sign up
          </h2>
          <a href="#" className="text-[#797B80] hover:text-gray-900 underline">
            Create a honeycomb account
          </a>
        </div>

        <div className="text-center border rounded-[30px] border-[#EEEEEE] px-4 py-[20px]">
          <div className="md:w-[54.41px] w-[44px] md:h-[54.41px] h-[44px] bg-[#131A22] rounded-full flex items-center justify-center text-white md:text-[25px] text-[20px] font-[600] mx-auto md:mt-[-48px] mt-[-42px]">
            2
          </div>
          <h2 className="md:text-[25px] text-[20px] font-[600] font-jost text-black mb-[8.5px] md:mt-[22px] mt-[15px]">
            Send data
          </h2>
          <a href="#" className="text-[#797B80] hover:text-gray-900 underline">
            Instrument your application and send us data
          </a>
        </div>

        <div className="text-center border rounded-[30px] border-[#EEEEEE] px-4 py-[20px]">
          <div className="md:w-[54.41px] w-[44px] md:h-[54.41px] h-[44px] bg-[#131A22] rounded-full flex items-center justify-center text-white md:text-[25px] text-[20px] font-[600] mx-auto md:mt-[-48px] mt-[-42px]">
            3
          </div>
          <h2 className="md:text-[25px] text-[20px] font-[600] font-jost text-black mb-[8.5px] md:mt-[22px] mt-[15px]">
            Analyze data
          </h2>
          <a href="#" className="text-[#797B80] hover:text-gray-900 underline">
            Start investigating your production systems
          </a>
        </div>
      </div>
    </section>
  );
}
