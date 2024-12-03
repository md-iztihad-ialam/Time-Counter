function Countdown(){
    return(
        <div className="w-[100%] h-[80dvh] bg-[#1c1c1c] flex justify-center items-center flex-col gap-5">
            <h1 className="text-4xl text-white font-mono">Just An Ordinary Stop Watch</h1>
            <h3 className="text-2xl text-white font-mono">RUN THE TIME</h3>
                <div className="flex gap-5">

                    <input 
                        type="number"
                        className="border-none rounded-xl bg-[#7d7d7d] p-[15px] w-[150px] text-white text-xl hover:bg-[#b0b0b0] hover:text-black"
                    />

                    <input 
                        type="number"
                        className="border-none rounded-xl bg-[#7d7d7d] p-[15px] w-[150px] text-white text-xl hover:bg-[#b0b0b0] hover:text-black"
                    />

                    <input 
                        type="number"
                        className="border-none rounded-xl bg-[#7d7d7d] p-[15px] w-[150px] text-white text-xl hover:bg-[#b0b0b0] hover:text-black"
                    />

                </div>

                <div className="flex w-[500px] justify-around text-white text-4xl">
                    <p>Hours</p>
                    <p>Minutes</p>
                    <p>Seconds</p>
                </div>

                <button
                    className="border-none rounded-full bg-[#7d7d7d] p-[10px] h-[80px] w-[80px] text-white text-xl hover:bg[#b0b0b0] hover:text-black "
                >
                    Start
                </button>
        </div>
    );
}

export default Countdown;