const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const SHORT_MONTH_LIST = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const FORMAT_SPLITTERS = ['%'];
const formatMap = {
    'yyyy': 'year',
    'YYYY': 'year',
    'yy': 'shortYear',
    'YY': 'shortYear',
    'MM': 'month',
    'b': 'shortMonth',
    'dd': 'day',
    'DD': 'day',
    'HH': 'hours',
    'mm': 'minutes',
    'ss': 'seconds'
};

module.exports = {
    ONE_MINUTE,
    ONE_HOUR,
    ONE_DAY,
    SHORT_MONTH_LIST,
    formatMap
}