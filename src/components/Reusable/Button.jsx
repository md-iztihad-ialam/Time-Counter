function Button({text, handleClick}){
    return(
        <button
            className="border-none rounded-xl bg-[#7d7d7d] p-[15px] w-[300px] text-white text-xl hover:bg-[#b0b0b0] hover:text-black"
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default Button;