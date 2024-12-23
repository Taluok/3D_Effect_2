import React from "react";

const Accordion = ({ data, toggleActive }) => {
    return (
        <div
            className={`w-[280px] p-5 bg-[#e9e9e9] border border-[#c9c6c655] rounded-md mb-5 duration-500 ${data.active ? "bg-white shadow-lg" : ""
                }`}
        >
            <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleActive} // Control del estado desde el padre
            >
                <div className={`w-full font-medium ${data.active ? "font-bold" : ""}`}>
                    {data.question}
                </div>
                <div
                    className={`text-xl transform duration-500 ${data.active ? "rotate-180" : "rotate-90"
                        }`}
                >
                    &gt;
                </div>
            </div>
            <div
                className={`overflow-hidden duration-500 ${data.active ? "max-h-[100px]" : "max-h-0"
                    }`}
            >
                <p className="mt-2 text-sm text-gray-700">{data.answer}</p>
            </div>
        </div>
    );
};

export default Accordion;


