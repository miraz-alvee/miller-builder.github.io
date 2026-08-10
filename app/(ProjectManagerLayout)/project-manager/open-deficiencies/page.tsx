"use client";

import { useState } from "react";

const inputClasses =
    "font-bebas w-full rounded-md border border-[#00000022] bg-white px-3 py-2 text-xs text-[#616161] leading-[120%] outline-none transition-colors focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B33] disabled:cursor-not-allowed disabled:bg-[#00000008]"

function FieldLabel({ children }: { children: React.ReactNode }) {
    return (
        <label className="mb-2 block font-bebas text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#6B6B6B]">
            {children}
        </label>
    )
}

export default function OpenDeficiencies() {

    const [fileName, setFileName] = useState('NO FILE CHOSEN');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileName(e.target.files[0].name.toUpperCase());
        } else {
            setFileName('NO FILE CHOSEN');
        }
    };

    return (
        <div className="min-h-screen bg-[#F7F4EF] p-4 sm:p-4 lg:p-6 text-[#111111]">
            <div className="space-y-6">
                {/* Top Header Tracker Line */}
                <header>
                    <h1 className="font-bebas text-xs font-medium uppercase tracking-wider text-[#00000099] sm:text-sm">
                        Submit corrections, then Proof verifies and closes or sends items back for rework.
                    </h1>
                </header>

                <div className="bg-[#FFFFFF] border border-[#BBF7D0] drop-shadow-xl rounded-[10px] py-8">
                    <div className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                        <div>
                            <h2 className="font-bebas text-[15px] font-medium leading-7 tracking-wide text-[#141414] sm:text-lg">
                                PB-26-0001-TILEHYDR-001-D01
                            </h2>
                            <p className="mt-1 font-bebas font-medium text-[10px] leading-5 text-xs text-[#141414] sm:text-lg">
                                HydroBlok panels installed correctly
                            </p>
                            <p className="mt-1 font-bebas font-medium text-[10px] leading-5 text-xs text-[#00000080] sm:text-sm">
                                7201 wesley · Tile - HydroBlok · Assigned: Unassigned · Opened: 2026-07-23
                            </p>
                            <div className="mt-2 bg-[#F5F1E8] w-full h-9 font-bebas text-base px-7 py-2 text-[#000000B2] rounded-[8px]">232</div>
                        </div>

                        <div className=" items-center gap-2 sm:flex-col sm:items-end">
                            <span className="rounded border border-[#00000022] bg-[#F7F4EF] px-2 py-1 font-bebas text-[10px] uppercase tracking-wider text-[#00000099] sm:text-xs">
                                Closed
                            </span>
                        </div>
                    </div>

                    <div className="w-full px-6 font-bebas text-xs font-medium uppercase tracking-wider text-[#00000099]">
                        <div className="rounded-[10px] border border-gray-200 bg-white p-6 shadow-sm">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">

                                {/* Correction Notes Section */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-medium uppercase leading-4 tracking-wider text-[#00000099]">
                                        Correction Notes
                                    </label>
                                    <textarea
                                        placeholder="DESCRIBE THE CORRECTION PERFORMED"
                                        rows={3}
                                        className="w-full rounded-md border border-[#00000033] px-4 py-3 text-xs font-medium uppercase tracking-wider placeholder-[#9CA3AF] outline-none transition-colors focus:border-gray-400"
                                    />
                                </div>

                                {/* Correction Photos Section */}
                                <div className="space-y-2">
                                    <label className="block text-xs font-medium uppercase leading-4 tracking-wider text-[#00000099]">
                                        Correction Photos
                                    </label>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <label className="cursor-pointer rounded bg-[#141414] px-4 py-2 text-[13px] leading-4 font-medium uppercase tracking-wider text-[#F7F4EF] transition-colors hover:bg-black">
                                            CHOOSE FILE
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                        <span className="font-bebas text-[13px] font-medium uppercase tracking-wider text-[#00000080] leading-4">
                                            {fileName}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons Row */}
                                <div className="pt-2 flex flex-col sm:flex-row flex-wrap gap-3">
                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-[#D4A017] hover:bg-[#C29E2E] text-[#141414] px-5 py-2.5 rounded font-medium text-[14px] uppercase tracking-wider transition-colors"
                                    >
                                        Submit Correction
                                    </button>

                                    {/* Proof Verify / Close Button */}
                                    <button
                                        type="button"
                                        className="w-full sm:w-auto bg-[#15803D] hover:bg-[#0E6234] text-white px-5 py-2.5 rounded font-medium text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                                    >
                                        {/* Checkmark Shield Icon */}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Proof Verify / Close
                                    </button>

                                    {/* Reject / Needs Rework Button */}
                                    <button
                                        type="button"
                                        className="w-full sm:w-auto bg-[#B91C1C] hover:bg-[#A81B1B] text-white px-5 py-2.5 rounded font-medium text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                                    >
                                        {/* Undo / Rework Icon */}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3 3 3m-3-3v12" />
                                        </svg>
                                        Reject / Needs Rework
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
