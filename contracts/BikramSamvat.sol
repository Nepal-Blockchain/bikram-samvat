pragma solidity ^0.4.18;
contract BikramSamvat {

    /*
     * Unix timestamp to Bikram Samvat (Date Time Library) 
     * @NepalBitcoin
     */

    address public dev;
    struct MITI {
        uint256 year;
        uint8 month;
        uint8 date;
        uint8 hour;
        uint8 min;
        uint8 sec;
        uint8 day;
        uint256 timestamp;
    }

    struct BSYears {
        bytes16 _hash;
        uint256 _leapCount;
    }

    struct CORE {
        int8[12] monthData;
        uint256 daysIn6Months;
        bool isLeap;
    }

    mapping(uint256 => BSYears) internal BS;
    mapping(bytes16 => CORE) internal DBCore;
    uint256 internal constant NST = 5 hours + 45 minutes; // GMT+05:45
    uint256 internal constant GENESIS = 103 days - NST; // gap between 1970/1/1 AD to 2027/1/1 BS
    uint256 internal constant EPOCH = 10; //leap year will overflow after (10*365.25*4) yrs
    uint256 internal constant EPOCHYEAR = EPOCH * 1 years; //leap year will overflow after (7*365.25*4) yrs
    uint256 public constant MINBSYEAR = 2027; // BS 2027/1/1 00:00:00 NST
    uint256 public MaxBSYear = 2026; // will increment
    uint256 public MaxTimestamp = 8878500; // will increment
    uint256 public MinTimestamp = 8878500; // will increment

    function BikramSamvat() public {
        dev = msg.sender;
        devSetBS(2027, [int8(0), 2, 1, 2, 1, 0, 0, 0, -1, 0, -1, 1]);
        devSetBS(2028, [int8(1), 1, 2, 1, 1, 1, 0, -1, 0, -1, 0, 0]);
    }

    function nowBS()
        public view
        returns(uint256 year, uint8 month, uint8 date,
        uint8 hour, uint8 min, uint8 sec,
        uint8 day, uint256 timestamp) 
        {
            MITI memory miti = toBikramSamvat(now);
            return (miti.year, miti.month, miti.date, miti.hour, miti.min, miti.sec, miti.day, miti.timestamp);
    }

    function convertBS2TS(uint256 _year, uint8 _month, uint8 _date) 
        public view 
        returns(uint256 year, uint8 month, uint8 date, 
        uint8 hour, uint8 min, uint8 sec, 
        uint8 day, uint256 timestamp) 
        {
            MITI memory miti = toTimestamp(_year, _month, _date, 0, 0, 0);
            return (miti.year, miti.month, miti.date, miti.hour, miti.min, miti.sec, miti.day, miti.timestamp);
    }

    function convertNST2TS(uint256 _year, uint8 _month, uint8 _date, uint8 _hour, uint8 _min, uint8 _sec)
        public view
        returns(uint256 year, uint8 month, uint8 date,
        uint8 hour, uint8 min, uint8 sec,
        uint8 day, uint256 timestamp) 
        {
            MITI memory miti = toTimestamp(_year, _month, _date, _hour, _min, _sec);
            return (miti.year, miti.month, miti.date, miti.hour, miti.min, miti.sec, miti.day, miti.timestamp);
    }

    function convertTS2BS(uint256 _timestamp)
        public view
        isValidTS(_timestamp)
        returns(uint256 year, uint8 month, uint8 date,
        uint8 hour, uint8 min, uint8 sec,
        uint8 day, uint256 timestamp) 
        {
            MITI memory miti = toBikramSamvat(_timestamp);
            return (miti.year, miti.month, miti.date, miti.hour, miti.min, miti.sec, miti.day, miti.timestamp);
    }


    modifier isValidTS(uint256 timestamp) {
        assert(timestamp >= MinTimestamp && timestamp <= MaxTimestamp);
        _;
    }

    modifier isValidBS(uint256 _year, uint8 _month, uint8 _date, uint8 _hour, uint8 _min, uint8 _sec) {
        assert(_year >= MINBSYEAR && _year <= MaxBSYear && _month > 0 && _month < 13 && _date > 0);
        assert(_date <= getDaysInMonth(_year, _month) && _hour < 24 && _min < 60 && _sec < 60);
        _;
    }

    function isLeapYear(uint256 _year) internal view returns(bool) {
        return DBCore[BS[_year]._hash].isLeap;
    }

    function getWeekDay(uint256 _timestamp) internal pure returns(uint8) {
        return uint8(((_timestamp / 1 days) + 2) % 7);
    }

    function getDaysInMonth(uint256 _year, uint8 _month) internal view returns(uint8) {
        return uint8(int8(30) + DBCore[BS[_year]._hash].monthData[_month - 1]);
    }

    function getMonthArr(uint256 _year) internal view returns(int8[12]) {
        return DBCore[BS[_year]._hash].monthData;
    }

    function getDaysIn6Months(uint256 _year) internal view returns(uint256) {
        return DBCore[BS[_year]._hash].daysIn6Months;
    }

    function toTimestamp(uint256 _year, uint8 _month, uint8 _date,
        uint8 _hour, uint8 _min, uint8 _sec)
    internal view
    isValidBS(_year, _month, _date, _hour, _min, _sec)
    returns(MITI memory miti) 
        {
        miti.timestamp = GENESIS;
        miti.timestamp += 366 days * BS[_year]._leapCount;
        miti.timestamp += 365 days * ((_year - MINBSYEAR) - BS[_year]._leapCount);
        if (_month > 6) {
            miti.month = 7;
            miti.timestamp += 1 days * getDaysIn6Months(_year);
        } else {
            miti.month = 1;
        }
        while (miti.month < _month) {
            miti.timestamp += 1 days * getDaysInMonth(_year, miti.month);
            miti.month++;
        }
        miti.year = _year;
        miti.date = _date;
        miti.timestamp += 1 days * (_date - 1);
        miti.timestamp += uint256(_hour) * 1 hours + uint256(_min) * 1 minutes + _sec;
        miti.day = uint8((((miti.timestamp - GENESIS) / 1 days) + 2) % 7);
        miti.hour = _hour;
        miti.min = _min;
        miti.sec = _sec;
    }

    function toBikramSamvat(uint256 _timestamp) internal view returns(MITI memory miti) {
        miti.timestamp = _timestamp;
        _timestamp -= GENESIS;

        miti.hour = uint8(((_timestamp / 1 minutes) / 1 minutes) % 24);
        miti.min = uint8((_timestamp / 1 minutes) % 1 minutes);
        miti.sec = uint8(_timestamp % 1 minutes);
        miti.day = uint8(((_timestamp / 1 days) + 2) % 7);

        miti.year = 2027;
        miti.year += uint256(EPOCH * (_timestamp / EPOCHYEAR));

        _timestamp = _timestamp % EPOCHYEAR;
        _timestamp -= 1 days * BS[miti.year]._leapCount;

        while (_timestamp > 364 days) {
            if (!isLeapYear(miti.year)) {
                _timestamp -= 365 days;
            } else {
                _timestamp -= 366 days;
            }
            miti.year++;
        }

        uint256 counter = 1 days * uint256(getDaysIn6Months(miti.year));

        if (_timestamp > counter) {
            miti.month = 7;
            _timestamp -= counter;
        } else {
            miti.month = 1;
        }

        for (miti.month; miti.month < 12; miti.month++) {
            counter = (1 days * uint256(getDaysInMonth(miti.year, miti.month)));
            if (_timestamp < counter)
                break;

            _timestamp -= counter;
        }
        miti.date = uint8(uint256(_timestamp + 86400) / 1 days);

    }

    /// Dev functions 

    modifier onlyDev() {
        assert(msg.sender == dev);
        _;
    }

    function devSetBS(uint256 _year, int8[12] _months) public onlyDev returns(bool) {
        assert(MaxBSYear == _year - 1 && getDaysIn6Months(_year) == 0);
        if (setBSCore(_year, _months))
            return true;
    }

    function setBSCore(uint _year, int8[12] _months) internal returns(bool) {

        bytes16 _hash = bytes16(keccak256(_months));
        int16 countDays;
        CORE memory _dbCore;
        if (DBCore[_hash].daysIn6Months == 0) {
            for (uint8 i = 0; i < 12; i++) {
                assert(_months[i] > -2 && _months[i] < 3);
                countDays += (int8(30) + _months[i]);
                if (i == 5)
                    _dbCore.daysIn6Months = uint256(countDays);
            }
            assert(countDays == 365 || countDays == 366);
            _dbCore.isLeap = (countDays == 365) ? false : true;
            _dbCore.monthData = _months;
            DBCore[_hash] = _dbCore;     
        } else {
            _dbCore = DBCore[_hash];
        } 
        
        if (!_dbCore.isLeap) {
            BS[_year + 1]._leapCount = BS[_year]._leapCount;
            MaxTimestamp += 365 days;
        } else {
            BS[_year + 1]._leapCount = BS[_year]._leapCount + 1;
            MaxTimestamp += 366 days;
        }
        BS[_year]._hash = _hash;
        MaxBSYear++;
        return true;
    }

    function killSwitch() public onlyDev {
        selfdestruct(msg.sender);
    }
    /// fallback
    function () public payable {
        revert();
    }
}