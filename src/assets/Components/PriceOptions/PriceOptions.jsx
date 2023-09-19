import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const price_options = [
        {
            id: 1,
            name: "Basic Membership",
            features: [
                "Access to cardio equipment",
                "Strength training area",
                "Locker room access",
                "Unlimited group fitness classes",
                "Discounts on gym merchandise",
                "Monthly fitness assessment",
                "Priority booking for classes"
            ],
            price: "$29.99",
        },
        {
            id: 2,
            name: "Premium Membership",
            features: [
                "Access to all gym facilities",
                "Personal training session (1/month)",
                "Sauna and steam room access",
                "Nutritional consultation",
                "Access to specialized fitness classes",
                "Priority booking for classes",
                "Towel service",
            ],
            price: "$49.99",
        },
        {
            id: 4,
            name: "Student Membership",
            features: [
                "Valid student ID required",
                "Access to all gym facilities",
                "Access to group fitness classes",
                "Flexible class scheduling",
                "Discounted healthy meal options",
                "Monthly student fitness events",
                "Free Wi-Fi in the gym",
            ],
            price: "$19.99",
        },
    ];
    
    return (
        <div className="m-12">
            <h2 className="text-5xl font-semibold text-center">Best price in the town</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 mt-5">
                {
                    price_options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;