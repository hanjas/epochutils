const cons = require('./constants');

const handleEpoch = (currTime) => {

    function addMinute(n) {
        return handleEpoch(currTime + (n * cons.ONE_MINUTE));
    }

    function subMinute(n) {
        return handleEpoch(currTime - (n * cons.ONE_MINUTE));
    }

    function addHour(n) {
        return handleEpoch(currTime + (n + cons.ONE_HOUR));
    }

    function subHour(n) {
        return handleEpoch(currTime - (n + cons.ONE_HOUR));
    }

    function addDay(n) {
        return handleEpoch(currTime + (n * cons.ONE_DAY));
    }

    function subDay(n) {
        return handleEpoch(currTime - (n * cons.ONE_DAY));
    }

    function addYear(n) {
        const d = new Date(currTime);
        d.setFullYear(d.getFullYear()+1);

        return handleEpoch(d.getTime());
    }

    function subYear(n) {
        const d = new Date(currTime);
        d.setFullYear(d.getFullYear()-1)

        return handleEpoch(d.getTime());
    }

    function todayUTC() {
        return currTime - (currTime % cons.ONE_DAY);
    }

    function todayLocal() {
        let localoffset = new Date().getTimezoneOffset() * cons.ONE_MINUTE;
        return todayUTC() + localoffset;
    }

    function getUTC() {
        let localoffset = new Date().getTimezoneOffset() * cons.ONE_MINUTE;
        return currTime - localoffset;
    }
    
    function getLocal() {
        return currTime;
    }
    
    function getTime() {
        return currTime;
    }

    function getDateObj() {
        const date = new Date(currTime);
        const dateObj = {
            year : date.getFullYear(),
            shortYear : date.getFullYear()%100,
            month : ('0' + (date.getMonth() + 1)).slice(-2),
            shortMonth : cons.SHORT_MONTH_LIST[date.getMonth()-1],
            day : ('0' + date.getDate()).slice(-2),
            hours : ('0' + date.getHours()).slice(-2),
            shortHour : (date.getHours() > 12) ? ('0' + (date.getHours()-12)).slice(-2) : date.getHours(),
            AMPM : (date.getHours() > 12) ? 'PM' : 'AM',
            minutes : date.getMinutes(),
            seconds : date.getSeconds()
        }
        return dateObj;
    }

    function format(inpformat) {

        const dateObj = getDateObj();
        inpformat = (inpformat.includes('a')) ? inpformat.replace('HH', dateObj.shortHour).replace("a", dateObj.AMPM) : inpformat;
        for (const [key, value] of Object.entries(cons.formatMap)) {
            inpformat = inpformat.replace(key, dateObj[value]);
        }

        return inpformat;
    }

    function toString() {

        const dateObj = getDateObj();
        const dateStr = [dateObj.day, dateObj.month, dateObj.year].join('-') + " " + [dateObj.hours, dateObj.minutes, dateObj.seconds].join(':');

        return dateStr;
    }

    return {
        addMinute, addHour, addDay, addYear,
        subMinute, subHour, subDay, subYear,
        todayUTC, todayLocal, getUTC, getLocal,
        format, toString, getDateObj, getTime
    }
}


function epochUtil(timestamp) {

    let currTime = (timestamp) ? timestamp : Date.now();

    return handleEpoch(currTime);
}

module.exports = {
    epochUtil
}
