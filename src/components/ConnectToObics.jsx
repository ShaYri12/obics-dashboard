import { BsArrowRightShort, BsLightning } from "react-icons/bs";
import {
  FaCloud,
  FaDownload,
  FaTerminal,
  FaCode,
  FaJava,
  FaPython,
  FaArrowRight,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdOutlineCloud } from "react-icons/md";
import { SiNodedotjs, SiGo } from "react-icons/si";

export default function ConnectToObics() {
  return (
    <div className="px-4 md:px-[40px] py-[30px] md:py-[41px] w-full">
      <div className="max-w-[1082.06px] mx-auto">
        {/* Obics Docs Section */}
        <section className="pb-[30px] md:pb-[39px] flex xl:flex-row flex-col gap-[22px] border-b border-[#EBEBEB]">
          <div className="xl:max-w-[213.4px] py-1">
            <h1 className="text-3xl font-bold mb-[9px]">Obics Docs</h1>
            <p className="text-[#797B80]">
              Learn how to use obics through guides, reference documentation,
              and videos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[19px]">
            <div className="bg-[#EEEFEF] rounded-[20px] px-[21px] py-[20px] hover:bg-opacity-[0.8] transition cursor-pointer">
              <div className="flex items-center gap-[10.68px] mb-[8.21px]">
                <img src="/assets/lightning-icon.png" alt="lightning" />
                <h2 className="text-[18px] font-[500] font-jost">
                  Quick Start
                </h2>
              </div>
              <p className="text-[#797B80]">
                Get Started with Obics in 5 Minutes
              </p>
            </div>

            <div className="bg-[#EEEFEF] rounded-[20px] px-[21px] py-[20px] hover:bg-opacity-[0.8] transition cursor-pointer">
              <div className="flex items-center gap-[10.68px] mb-[8.21px]">
                <img src="/assets/download-icon.png" alt="download" />
                <h2 className="text-[18px] font-[500] font-jost">Install</h2>
              </div>
              <p className="text-[#797B80]">
                Install guides for every platform
              </p>
            </div>

            <div className="bg-[#EEEFEF] rounded-[20px] px-[21px] py-[20px] hover:bg-opacity-[0.8] transition cursor-pointer">
              <div className="flex items-center gap-[10.68px] mb-[8.21px]">
                <img src="/assets/cloud-icon.png" alt="cloud" />
                <h2 className="text-[18px] font-[500] font-jost mt-[5px]">
                  Quick Start
                </h2>
              </div>
              <p className="text-[#797B80]">
                The fastest way to get started with Obius
              </p>
            </div>
          </div>
        </section>

        {/* Connect to Obics Section */}
        <section className="md:pt-[34px] pt-[20px] flex xl:flex-row flex-col gap-[22px] w-full">
          <div className="xl:max-w-[213.4px]  py-1">
            <h2 className="text-[25px] font-[600] font-jost mb-[9px]">
              Connect to Obics
            </h2>
            <p className="text-[#797B80]">
              Connect your application to Obics in just a few minutes
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[19px] gap-y-[16px] w-full">
              <div className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer">
                <img
                  src="/assets/terminal-2-icon.png"
                  alt="terminal-2"
                  className="w-[35.69px]"
                />
                <h2 className="text-[18px] font-[500] font-jost">Obics CLI</h2>
              </div>

              <div className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer">
                <img src="/assets/terminal-icon.png" alt="terminal" />
                <h2 className="text-[18px] font-[500] font-jost">
                  Cloud SQL Console
                </h2>
              </div>

              <div className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer">
                <img src="/assets/node-js-icon.png" alt="nodejs" />
                <h2 className="text-[18px] font-[500] font-jost">Node Js</h2>
              </div>

              <div className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer">
                <img src="/assets/java-icon.png" alt="java" />
                <h2 className="text-[18px] font-[500] font-jost">Java</h2>
              </div>

              <div className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer">
                <img src="/assets/python-icon.png" alt="python" />
                <h2 className="text-[18px] font-[500] font-jost">Python</h2>
              </div>

              <div className="flex items-center gap-[8px] bg-[#EEEFEF] rounded-[20px] px-[20px] py-[19px] hover:bg-opacity-[0.8] transition cursor-pointer">
                <img src="/assets/go-icon.png" alt="go" />
                <h2 className="text-[18px] font-[500] font-jost">Go</h2>
              </div>
            </div>

            <button className="mt-[27px] flex group items-center text-black hover:text-gray-800 transition cursor-pointer text-[14px]">
              See all
              <span className="w-[23px] h-[23px] flex items-center justify-center bg-black group-hover:bg-gray-800 rounded-full text-white ml-[9.5px]">
                <BsArrowRightShort size={17} />
              </span>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
