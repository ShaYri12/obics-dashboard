import { useState } from "react";
import { HiOutlineCheck, HiOutlineLightBulb } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import CustomChart from "./CustomChart";

export default function InsertingData() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = `SELECT count(*), R.Message as user_info
FROM Logs AS L
LEFT JOIN Logs AS R
ON L.CorrelationId = R.CorrelationId
WHERE L.Level = 'Error'
AND L.Message LIKE '%error:already-posting%'
AND R.LogId = 'usr2'
GROUP BY user_info`;

    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);

    // Reset the state after 3 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="px-4 md:px-[40px] py-[21px] w-full">
      <div className="max-w-[1082.06px] mx-auto overflow-x-hidden">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-[7px] text-sm text-black mb-[20px] md:mb-[30px] bg-gray-100 px-[17px] py-[11px] rounded-full w-fit">
          <img src="/assets/starter-icon.png" alt="starter guide" />
          <span className="text-[#797B80]">Starter Guides</span>
          <span className="text-[#B3B3B3]">/</span>
          <span>Inserting data</span>
        </nav>

        {/* Main Content */}
        <h1 className="text-[30px] md:text-[40px] font-[600] font-jost mb-[16px] md:mb-[22px] text-black">
          Inserting Data
        </h1>

        <section className="mb-8">
          <h2 className="text-[22px] md:text-[30px] font-[600] font-jost mb-[8px] md:mb-[14px] text-black">
            Basic Example
          </h2>
          <p className="text-[#797B80] text-[16px] mb-[26px]">
            Lorem ipsum dolor sit amet consectetur. Ac et vitae aliquet
            vestibulum morbi volutpat id justo sed. Eu sollicitudin etiam etiam
            rhoncus. At sed scelerisque ac viverra sed feugiat ipsum. Mauris
            cras eu molestie et hac.
          </p>

          {/* Code Block */}
          <div className="relative bg-[#FAFBFB] rounded-[5px] p-[20px] md:p-[28px] mb-[23px]">
            <button
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              onClick={handleCopy}
            >
              <span className="w-[41.05px] h-[41.05px] flex items-center justify-center bg-[#DFE0E0] rounded-full">
                {isCopied ? (
                  <HiOutlineCheck className="w-[20px] h-[20px] text-green-600" />
                ) : (
                  <IoCopyOutline className="w-[20px] h-[20px] text-black" />
                )}
              </span>
            </button>

            {/* Copied message */}
            {isCopied && (
              <div className="absolute right-4 top-[60px] text-center text-sm text-green-600">
                Copied
              </div>
            )}
            <pre className="font-mono text-sm text-[#2B2828] overflow-x-auto">
              <code className="font-mono">
                <span className="text-[#A26AE2]">SELECT</span> count(*),{" "}
                <span className="text-[#D03736]">R.Message</span> as{" "}
                <span className="text-[#1C842D]">user_info</span>
                {"\n"}
                <span className="text-[#A26AE2]">FROM</span>{" "}
                <span className="text-[#D03736]">Logs</span>{" "}
                <span className="text-[#A26AE2]">AS</span> L{"\n"}
                <span className="text-[#A26AE2]">LEFT JOIN</span>{" "}
                <span className="text-[#D03736]">Logs</span>{" "}
                <span className="text-[#A26AE2]">AS</span> R{"\n"}
                <span className="text-[#A26AE2]">ON</span>{" "}
                <span className="text-[#1C842D]">L.CorrelationId</span> ={" "}
                <span className="text-[#1C842D]">R.CorrelationId</span>
                {"\n"}
                <span className="text-[#A26AE2]">WHERE</span>{" "}
                <span className="text-[#1C842D]">L.Level</span> = 'Error'
                {"\n"}
                <span className="text-[#A26AE2]">AND</span>{" "}
                <span className="text-[#1C842D]">L.Message</span>{" "}
                <span className="text-[#A26AE2]">LIKE</span>{" "}
                '%error:already-posting%'
                {"\n"}
                <span className="text-[#A26AE2]">AND</span>{" "}
                <span className="text-[#1C842D]">R.LogId</span> = 'usr2'
                {"\n"}
                <span className="text-[#A26AE2]">GROUP BY</span>{" "}
                <span className="text-[#1C842D]">user_info</span>
              </code>
            </pre>
          </div>

          <p className="text-[#797B80] text-[16px] mb-[15px]">
            Lorem ipsum dolor sit amet consectetur. Ac et vitae aliquet
            vestibulum morbi volutpat id justo sed. Eu sollicitudin etiam etiam
            rhoncus. At sed scelerisque ac viverra sed feugiat ipsum. Mauris
            cras eu molestie et hac.
          </p>

          {/* Tip Box */}
          <div className="bg-[#B1EDC1] rounded-[5px] p-[9px]">
            <div className="flex items-center gap-[5px] text-[#3D9E57] mb-[10px]">
              <HiOutlineLightBulb className="w-[22px] h-[22px]" />
              <span className="font-medium">Tip</span>
            </div>
            <p className="text-[#797B80] bg-white px-[20px] py-[6px] rounded-[5px]">
              Lorem ipsum dolor sit amet consectetur. Ac et vitae aliquet
              vestibulum morbi volutpat id justo sed. Eu sollicitudin etiam
              etiam rhoncus. At sed scelerisque ac viverra sed feugiat ipsum.
              Mauris cras eu molestie et hac.
            </p>
          </div>
        </section>

        <CustomChart />
      </div>
    </div>
  );
}
