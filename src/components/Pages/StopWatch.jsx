import { useEffect, useRef, useState } from "react";

function StopWatch(){

    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const id = useRef(null);

    function handleStart(){
        if(!id.current){
            id.current = setInterval(() => {
                setSecond((second) => {
                    const newSecond = second+1;
                    if(newSecond == 5){
                        setSecond(0);
                        setMinute((minute) => {
                            const newMinute = minute+1;
                            if(newMinute == 5){
                                setMinute(0);
                                setHour(hour+1);
                            }

                            return newMinute;
                        })
                    }
                    return newSecond;
                });
            }, 1000);
        }
    }

    function handleStop(){
        clearInterval(id.current);  
    }

    function handleReset(){
        clearInterval(id.current);
        id.current=null;
        setSecond(0);
        setMinute(0);
        setHour(0);
    }

    function handleResume(){
        if(id.current){
            id.current = setInterval(() => {
                setSecond((second) => {
                    const newSecond = second+1;
                    if(newSecond == 5){
                        setSecond(0);
                        setMinute((minute) => {
                            const newMinute = minute+1;
                            if(newMinute == 5){
                                setMinute(0);
                                setHour(hour+1);
                            }

                            return newMinute;
                        })
                    }
                    return newSecond;
                });
            }, 1000);
        }
    }


    return(
        <div className="w-[100%] h-[80dvh] bg-[#1c1c1c] flex justify-center items-center flex-col gap-5">
            <h1 className="text-4xl text-white font-mono">Just An Ordinary Stop Watch</h1>
            <h3 className="text-2xl text-white font-mono">RUN THE TIME</h3>
            <div className="flex gap-5">

                <div 
                    className="w-[200px] h-[100px] rounded-xl bg-[#7d7d7d] flex justify-center items-center text-5xl   text-white     font-mono"
                >
                    {hour}
                </div>

                <div 
                    className="w-[200px] h-[100px] rounded-xl bg-[#7d7d7d] flex justify-center items-center text-5xl text-white font-mono"
                >
                    {minute}
                </div>

                <div 
                    className="w-[200px] h-[100px] rounded-xl bg-[#7d7d7d] flex justify-center items-center text-5xl text-white font-mono"
                >
                    {second}
                </div>

            </div>

            <div className="flex gap-8">
                <button
                    className="border-none rounded-full bg-[#7d7d7d] p-[10px] h-[80px] w-[80px] text-white text-xl hover:bg[#b0b0b0]hover:text-black "
                    onClick={handleStart}
                >
                    Start
                </button>

                <button
                    className="border-none rounded-full bg-[#7d7d7d] p-[10px] h-[80px] w-[80px] text-white text-xl hover:bg[#b0b0b0]hover:text-black "
                    onClick={handleStop}
                >
                    Stop
                </button>

                <button
                    className="border-none rounded-full bg-[#7d7d7d] p-[10px] h-[80px] w-[80px] text-white text-xl hover:bg[#b0b0b0]hover:text-black "
                    onClick={handleResume}
                >
                    Resume
                </button>

                <button
                    className="border-none rounded-full bg-[#7d7d7d] p-[10px] h-[80px] w-[80px] text-white text-xl hover:bg[#b0b0b0]hover:text-black "
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>

        </div>
    );
}

export default StopWatch;