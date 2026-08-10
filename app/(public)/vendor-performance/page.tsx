import { Download, PrinterCheck } from 'lucide-react'

const tableData = [
    {
        vendor: "UNASSIGNED",
        rightOnInstall: 0,
        deficiencies: 1,
        open: 1,
        correctionSubmitted: 1,
        closed: 0,
        avgDaysToClose: 1,
        rightOnScore: 100,
    },
    {
        vendor: "UNASSIGNED",
        rightOnInstall: 0,
        deficiencies: 1,
        open: 1,
        correctionSubmitted: 1,
        closed: 0,
        avgDaysToClose: 1,
        rightOnScore: 100,
    },
    {
        vendor: "UNASSIGNED",
        rightOnInstall: 0,
        deficiencies: 1,
        open: 1,
        correctionSubmitted: 1,
        closed: 0,
        avgDaysToClose: 1,
        rightOnScore: 100,
    },
];

export default function VendorPerformance() {
    return (
        <div className="min-h-screen bg-[#F7F4EF] p-4 sm:p-4 lg:p-6 text-[#111111]">
            <div className="space-y-6">
                {/* Top Header Tracker Line */}
                <header>
                    <h1 className="font-bebas text-xs font-medium uppercase tracking-wider text-[#00000099] sm:text-sm">
                        Scores include both installation correct items and deficiencies assigned to each vendor. Vendor names are normalized so extra spaces at the end are ignored.
                    </h1>
                </header>

                <div className="flex items-center gap-4">
                    <button className="cursor-pointer font-bebas text-sm leading-5 px-5 py-2.5 bg-[#15803D] text-[#FFFFFF] font-medium border border-[#15803D]/20 rounded-lg transition-colors duration-200 shadow-sm flex items-center gap-4">
                        <Download />
                        Export Vendor Summary CSV
                    </button>
                    <button className="cursor-pointer font-bebas text-sm leading-5 px-5 py-2.5 bg-[#15803D] text-[#FFFFFF] font-medium border border-[#15803D]/20 rounded-lg transition-colors duration-200 shadow-sm flex items-center gap-4">
                        <Download />
                        Export Vendor Details CSV
                    </button>

                    <button className="cursor-pointer font-bebas text-sm leading-5 px-5 py-2.5 bg-[#141414] hover:bg-[#000000] text-white font-medium rounded-lg border border-[#00000026] transition-colors duration-200 shadow-sm flex items-center gap-3">
                        <PrinterCheck />
                        Export PDF
                    </button>
                </div>


                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm font-bebas">
                    <table className="w-full border-collapse text-left text-xs font-semibold tracking-wider">
                        {/* Table Header */}
                        <thead>
                            <tr className="bg-[#141414] text-white uppercase text-[10px]">
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Vendor</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Right On Install</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Deficiencies</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Open</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Correction Submitted</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Closed</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase">Avg Days To Close</th>
                                <th className="px-6 py-4 text-[#FFFFFF] font-medium text-xs leading-[100%] uppercase text-center">Right-On Score</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-100 text-[#5E6B85]">
                            {tableData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.vendor}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.rightOnInstall}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.deficiencies}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.open}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.correctionSubmitted}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.closed}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%]">{row.avgDaysToClose}</td>
                                    <td className="font-bebas px-6 py-4 text-xs font-medium text-[#5E6B85] leading-[100%] text-center">
                                        <span className="inline-block bg-[#E6F7ED] text-[#4a844d] px-3 py-1 rounded text-[11px] font-bold">
                                            {row.rightOnScore}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Table Footer / Disclaimer Note */}
                <div className="font-bebas mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00000066]">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            pathLength="1"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <span>Reports reflect the latest locked inspections.</span>
                </div>



            </div>
        </div>
    )
}
