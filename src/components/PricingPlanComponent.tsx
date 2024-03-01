import { PricingCard } from "./PricingCard";

interface PetPricing {
    price: number;
    benefits: string[];
}

class PawEssentials implements PetPricing {
    price: number = 20;
    benefits: string[] = [
        "Daily care (feeding, grooming)",
        "Safe play environment",
        "Online community access",
    ]
}

class PawComfort implements PetPricing {
    price: number = 40;
    benefits: string[] = [
      "All PawEssentials features",
      "Health check-ups, vaccinations",
      "Personalized nutrition",
      "Spa, transport discounts",
    ];
  }
  
class PawPremium implements PetPricing {
    price: number = 60;
    benefits: string[] = [
        "All PawComfort perks",
        "Emergency transport",
        "Health monitoring app",
        "Special events, training",
    ];
}

class PetPricingFactory {
    static createPetPricing(type: string): PetPricing {
        switch (type.toLowerCase()) {
            case "basic": 
                return new PawEssentials();
            case "standard":
                return new PawComfort();
            case "extended":
                return new PawPremium();
            default:
                throw new Error("Invalid Pet Pricing");
        }
    }
}



export const PricingPlanComponent = () => {
    const basicTier =  PetPricingFactory.createPetPricing("basic");
    const standardTier = PetPricingFactory.createPetPricing("standard");
    const extendedTier = PetPricingFactory.createPetPricing("extended");

    return (
        <div className='px-3 py-12 mx-10'>
            <div className='border-l-4 border-primarycolor h-32 flex flex-col'>
                <p className='text-primarycolor font-bold text-md pl-10'>PRICING PLAN</p>
                <p className='font-bold text-5xl pl-10'>COMPETITIVE PRICING <br />FOR PET SERVICES</p>
            </div>
            <div className='flex justify-between mt-8'>
                <PricingCard tier="Basic" benefits={basicTier.benefits} price={basicTier.price}/>
                <PricingCard tier="Standard" benefits={standardTier.benefits} price={standardTier.price}/>
                <PricingCard tier="Extended" benefits={extendedTier.benefits} price={extendedTier.price}/>
            </div>
        </div>
    )
}