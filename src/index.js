const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const formatMap = {
    'yyyy': 'year',
    'YYYY': 'year',
    'yy': 'shortYear',
    'YY': 'shortYear',
    'MM': 'month',
    'dd': 'day',
    'DD': 'day',
    'HH': 'hours',
    'mm': 'minutes',
    'ss': 'seconds'
}

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

    function getDateObj() {
        const date = new Date(epoch);
        const dateObj = {
            year : date.getFullYear(),
            shortYear : date.getFullYear()%100,
            month : ('0' + (date.getMonth() + 1)).slice(-2),
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
        for (const [key, value] of Object.entries(formatMap)) {
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
        format, toString, getDateObj
    }
}


function epochUtil(timestamp) {

    let epoch = (timestamp) ? timestamp : Date.now();

    return handleEpoch(epoch);
}

module.exports = {
    epochUtil
}
