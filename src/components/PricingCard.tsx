import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface PricingCardProps {
    tier: string;
    price: number;
    benefits: string[];
}

export const PricingCard: React.FC<PricingCardProps> = ({ tier, benefits, price }) => {
    return (
        <div className={`relative bg-gray-100 lg:w-2/3 max-lg:w-full mx-5 mb-5 pb-32 ${tier !== "Standard" ? "lg:mt-14" : ""}`}>
            <div className="text-center">
                <h1 className="font-extrabold text-3xl pt-8">{tier}</h1>
                <p className="text-gray-500 mb-10">The Best Choice</p>
                <div className={`${tier === "Standard" ? "bg-black" : "bg-primarycolor"} w-full h-20 flex items-center justify-center text-white`}>
                    <h1 className="text-3xl font-extrabold">${price}<sub>/mo</sub></h1>
                </div>
                <div className="my-5">
                    {
                        benefits.map((benefit, i) => (
                            <p key={i} className="my-2">{benefit}  <FontAwesomeIcon icon={faCheck} className="text-primarycolor"/></p>
                        ))
                    }
                </div>
            </div>
            <div className="absolute bottom-10 flex w-full justify-center">
                <button className="bg-primarycolor text-white py-2 px-6 duration-300 hover:text-black font-extrabold">
                    ORDER NOW
                </button>
            </div>
        </div>
    )
}