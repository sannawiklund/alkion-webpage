
import React from "react";

function LevelCard({ title, description, minHeight, titleColor, price }) {
    return (
        <div className={`flex-col justify-start items-start bg-neutral-100 p-5 rounded-lg w-full sm:w-1/3 md:w-1/3 lg:w-1/3 flex-1`}>
            <h3 className={`text-2xl font-bold font-manrope leading-normal ${titleColor}`}>{title}</h3>
            <p className="text-gray-600 text-base font-normal leading-relaxed">{description}</p>
            {price && (
                <p className="text-gray-800 text-base font-semibold mt-auto pt-4">Price: {price}</p>
            )}
        </div>
    );
}

export default LevelCard;