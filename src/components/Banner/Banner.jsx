import { useNavigate } from "react-router-dom";

function Banner(){

    const navigate = useNavigate();

    function handleClick(){
        navigate('/');
    }

    return(
        <div className="w-[100%] h-[20dvh] bg-[#3d3d3d] text-white font-serif flex flex-col justify-center items-center hover:cursor-pointer" onClick={handleClick}>
            <h1 className="text-5xl">
                TIME COUNTER
            </h1>

            <h3 className="text-2xl">
                Your very own countdown app
            </h3>
        </div>
    );
}

export default Banner;