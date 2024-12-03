import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import CalenderCounter from '../Pages/CalanderCounter';
import Layout from '../Layout/Layout';
import BirthdayWish from '../Pages/BirthdayWish';
import CountDown from '../Pages/CountDown';
import Counter from '../Pages/Counter';
import StopWatch from '../Pages/StopWatch';

function Routing(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/' element={<Layout />}>

                <Route path='/calender-counter' element={<CalenderCounter />} />
                <Route path='/birthdaywish' element={<BirthdayWish />} />
                <Route path='/countdown' element={<CountDown />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/stopwatch' element={<StopWatch />} />


            </Route>


            <Route path='/calender-counter' element={<CalenderCounter />} />
        </Routes>
    );
}

export default Routing;