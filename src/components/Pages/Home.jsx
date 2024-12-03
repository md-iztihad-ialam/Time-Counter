import { useNavigate } from "react-router-dom";
import Button from "../Reusable/Button";

function Home(){

    const navigate = useNavigate();

    function handleClick(event){
        const address = event.target.textContent.toLowerCase().replace(' ', '-');
        navigate(`/${address}`);
    }

    return(
        <div  className="h-[80dvh] w-[100dvw] bg-[#1c1c1c] flex justify-center items-center">

            <div className="w-[65%] flex justify-around gap-5 flex-wrap">

                <Button 
                    text="Calender Counter"
                    handleClick={handleClick}
                />

                <Button 
                    text="Birthday Wish"
                    handleClick={handleClick}
                />

                <Button 
                    text="Countdown"
                    handleClick={handleClick}
                />

                <Button 
                    text="Counter"
                    handleClick={handleClick}
                />

                <Button 
                    text="Stop Watch"
                    handleClick={handleClick}
                />

            </div>

        </div>
    );
}

export default Home;