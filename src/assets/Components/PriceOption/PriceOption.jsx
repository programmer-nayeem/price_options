import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const {name , price , features} = option
    return (
        <div className="bg-pink-500 rounded-lg px-2 py-8 text-white space-y-5">
            <h2 className="text-center">
                <span className="text-4xl font-extrabold">{price}</span>
                <span className="text-2xl font-medium">/mon</span>
            </h2>
            <h4 className="text-4xl text-center">{name}</h4>
            {
                features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
            }
            <div className="mx-8 mt-8">
                <button className="btn bg-base-200 w-full text-center">Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;