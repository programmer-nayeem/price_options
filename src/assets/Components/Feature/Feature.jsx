import { AiOutlineCheckCircle } from 'react-icons/ai';
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-3 items-center ml-6'><AiOutlineCheckCircle></AiOutlineCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;