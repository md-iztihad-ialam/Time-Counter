import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import converter from "../helper/converter";

function CalenderCounter(){

    const [target, setTarget] = useState(null);
    const [diff, setDiff] = useState(0);
    const id = useRef(null);

    function handleSubmit(){
        id.current = setInterval(()=>{
            setDiff(new Date(target) - new Date());
        }, 1000);
    }

    useEffect(() => {
        if(diff<0){
            clearInterval(id.current);
            setDiff(0);
        }
    }, [diff])

    const convertedTime = converter(diff);





    return (
        <div className="w-[100%] h-[80dvh] bg-[#1c1c1c]">
            <div className="flex flex-col gap-5 justify-center items-center">
                <div>
                    <h3 className="text-2xl text-white mt-[20px]">Set your timer using calender</h3>
                </div>

                <div className="flex flex-col gap-4 justify-center items-center">
                    <input
                        className="w-[500px] bg-[#7d7d7d] border-2 border-white text-white p-3 text-xl rounded-md hover:bg-[#b0b0b0]
                        hover:text-black" 
                        type="datetime-local"
                        onChange={(event) => {
                            setTarget(event.target.value);
                            //console.log(event.target.value);
                        }}
                    />

                    <button
                        className="border-none rounded-full bg-[#7d7d7d] p-[10px] h-[80px] w-[80px] text-white text-xl hover:bg-[#b0b0b0] hover:text-black "
                        onClick={handleSubmit}
                    >
                        Start
                    </button>
                </div>

                <div>
                    <ul className="list-none text-white text-xl w-[500px] h-[200px] flex justify-center items-center bg-[#7d7d7d] rounded-2xl gap-10">
                        <li className="flex flex-col gap-3"><span className="text-5xl">{convertedTime.getDays()}</span>DAYS</li>
                        <li className="flex flex-col gap-3"><span className="text-5xl">{convertedTime.getHours()}</span>HOURS</li>
                        <li className="flex flex-col gap-3"><span className="text-5xl">{convertedTime.getMinutes()}</span>MINUTES</li>
                        <li className="flex flex-col gap-3"><span className="text-5xl">{convertedTime.getSeconds()}</span>SECONDS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CalenderCounter;