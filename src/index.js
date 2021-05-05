const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;

const handleEpoch = (epoch) => {

    function addMinute(n) {
        return epoch + (n * ONE_MINUTE);
    }

    function addHour(n) {
        return epoch + (n + ONE_HOUR)
    }

    function addDay(n) {
        return epoch + (n * ONE_DAY);
    }

    function addYear(n) {
        const d = new Date(epoch);
        d.setFullYear(d.getFullYear()+1)
        return d.getTime();
    }

    function subMinute(n) {
        return epoch - (n * ONE_MINUTE);
    }

    function subHour(n) {
        return epoch - (n + ONE_HOUR)
    }

    function subDay(n) {
        return epoch - (n * ONE_DAY);
    }

    function subYear(n) {
        const d = new Date(epoch);
        d.setFullYear(d.getFullYear()-1)
        return d.getTime();
    }

    function todayUTC() {
        return epoch - (epoch % ONE_DAY);
    }

    function todayLocal() {
        let localoffset = new Date().getTimezoneOffset() * ONE_MINUTE;
        return todayUTC() + localoffset;
    }

    function getUTC() {
        let localoffset = new Date().getTimezoneOffset() * ONE_MINUTE;
        return epoch - localoffset;
    }
    
    function getLocal() {
        return epoch
    }

    return {
        addMinute, addHour, addDay, addYear,
        subMinute, subHour, subDay, subYear,
        todayUTC, todayLocal, getUTC, getLocal
    }
}


function epochUtil(timestamp) {

    let epoch = (timestamp) ? timestamp : Date.now();

    return handleEpoch(epoch);
}

module.exports = {
    epochUtil
}
