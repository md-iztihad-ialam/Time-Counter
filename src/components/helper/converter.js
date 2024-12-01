function converter(diff){
    function getDays(){
        return Math.floor(diff / (1000 * 60 * 60 * 24));
    }

    function getHours(){
        return Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    }

    function getMinutes(){
        return Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    }

    function getSeconds(){
        return Math.floor((diff % (1000 * 60)) / 1000);
    }

    return {
        getDays,
        getHours,
        getMinutes,
        getSeconds
    }
}

export default converter;