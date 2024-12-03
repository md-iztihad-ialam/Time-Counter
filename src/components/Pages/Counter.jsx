import { useState } from "react";
import Button from "../Reusable/Button";

function Counter(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

    function decrement(){
        if(count > 0){
            setCount(count-1);
        }  
    }


    return(
        <div className="w-[100%] h-[80dvh] bg-[#1c1c1c] flex justify-center items-center flex-col gap-5">

            <h1 className="text-4xl text-white font-mono">The Infinite Counter</h1>
            <h3 className="text-2xl text-white font-mono">COUNT AS MUCH AS YOU CAN</h3>

            <div className="w-[200px] h-[100px] rounded-xl bg-[#7d7d7d] flex justify-center items-center text-5xl text-white font-mono
            ">
                {count}
            </div>

            <div className="flex gap-5">
                <Button
                    text="Increment"
                    handleClick={increment}
                />

                <Button 
                    text={"Decrement"}
                    handleClick={decrement}
                />
            </div>

        </div>
    );
}

export default Counter;