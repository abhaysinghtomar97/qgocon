export default function BankDetailsTable() {
  return (
    <div className="flex justify-center p-8 bg-[#f5f5f5]">
      {/* Table Container */}
      <table className="w-full max-w-4xl border-collapse bg-[#fafafa] text-left text-sm md:text-base font-sans">
        <tbody className="text-gray-600">
          
          {/* Row 1 */}
          <tr>
            <td className="w-1/2 border border-gray-200 p-4 font-bold text-gray-600">
              Account Name:
            </td>
            <td className="w-1/2 border border-gray-200 p-4 text-gray-500">
              Gyancity Research Consultancy Pvt Ltd
            </td>
          </tr>

          {/* Row 2 */}
          <tr>
            <td className="border border-gray-200 p-4 font-bold text-gray-600">
              A/C Number:
            </td>
            <td className="border border-gray-200 p-4 text-gray-500">
              50200035294024
            </td>
          </tr>

          {/* Row 3 */}
          <tr>
            <td className="border border-gray-200 p-4 font-bold text-gray-600">
              Bank Identifier CODE (BIC)/SWIFT CODE/Routing CODE:
            </td>
            <td className="border border-gray-200 p-4 text-gray-500">
              HDFCINBB
            </td>
          </tr>

          {/* Row 4 */}
          <tr>
            <td className="border border-gray-200 p-4 font-bold text-gray-600">
              BRANCH:
            </td>
            <td className="border border-gray-200 p-4 text-gray-500">
              Sector 14, Gurugram, India, PIN: 122001
            </td>
          </tr>

          {/* Row 5 */}
          <tr>
            <td className="border border-gray-200 p-4 font-bold text-gray-600">
              BANK:
            </td>
            <td className="border border-gray-200 p-4 text-gray-500">
              HDFC Bank
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}