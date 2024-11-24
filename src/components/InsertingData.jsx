import { FiHome, FiCopy } from "react-icons/fi";
import { BsLightbulb } from "react-icons/bs";

export default function InsertingData() {
  return (
    <div className="px-4 md:px-[40px] py-[21px] w-full">
      <div className="max-w-[1082.06px] mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8 bg-gray-100 px-4 py-2 rounded-full w-fit">
          <FiHome className="w-4 h-4" />
          <span>Starter Guides</span>
          <span>/</span>
          <span className="text-gray-900">Inserting data</span>
        </nav>

        {/* Main Content */}
        <h1 className="text-4xl font-bold mb-8">Inserting Data</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Basic Example</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet consectetur. Ac et vitae aliquet
            vestibulum morbi volutpat id justo sed. Eu sollicitudin etiam etiam
            rhoncus. At sed scelerisque ac viverra sed feugiat ipsum. Mauris
            cras eu molestie et hac.
          </p>

          {/* Code Block */}
          <div className="relative bg-gray-50 rounded-lg p-4 mb-6">
            <button
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
              onClick={() =>
                navigator.clipboard
                  .writeText(`SELECT count(*), R.Message as user_info
FROM Logs AS L
LEFT JOIN Logs AS R
ON L.CorrelationId = R.CorrelationId
WHERE L.Level = 'Error'
AND L.Message LIKE '%error:already-posting%'
AND R.LogId = 'usr2'
GROUP BY user_info`)
              }
            >
              <FiCopy className="w-5 h-5" />
            </button>
            <pre className="font-mono text-sm">
              <code>
                <span className="text-purple-600">SELECT</span> count(*),{" "}
                <span className="text-red-500">R.Message</span> as{" "}
                <span className="text-green-600">user_info</span>
                {"\n"}
                <span className="text-purple-600">FROM</span> Logs{" "}
                <span className="text-purple-600">AS</span> L{"\n"}
                <span className="text-purple-600">LEFT JOIN</span> Logs{" "}
                <span className="text-purple-600">AS</span> R{"\n"}
                <span className="text-purple-600">ON</span> L.CorrelationId =
                R.CorrelationId
                {"\n"}
                <span className="text-purple-600">WHERE</span> L.Level = 'Error'
                {"\n"}
                <span className="text-purple-600">AND</span> L.Message{" "}
                <span className="text-purple-600">LIKE</span>{" "}
                '%error:already-posting%'
                {"\n"}
                <span className="text-purple-600">AND</span> R.LogId = 'usr2'
                {"\n"}
                <span className="text-purple-600">GROUP BY</span> user_info
              </code>
            </pre>
          </div>

          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur. Ac et vitae aliquet
            vestibulum morbi volutpat id justo sed. Eu sollicitudin etiam etiam
            rhoncus. At sed scelerisque ac viverra sed feugiat ipsum. Mauris
            cras eu molestie et hac.
          </p>

          {/* Tip Box */}
          <div className="bg-green-100 rounded-lg p-6">
            <div className="flex items-center gap-2 text-green-800 mb-2">
              <BsLightbulb className="w-5 h-5" />
              <span className="font-medium">Tip</span>
            </div>
            <p className="text-green-800">
              Lorem ipsum dolor sit amet consectetur. Ac et vitae aliquet
              vestibulum morbi volutpat id justo sed. Eu sollicitudin etiam
              etiam rhoncus. At sed scelerisque ac viverra sed feugiat ipsum.
              Mauris cras eu molestie et hac.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
