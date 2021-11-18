const isLeapYear = (year)=> {
    if(year === undefined){
        throw new Error('year must be exist');
    }
    if(typeof year !== "number"){
        throw new Error('year must be number');
    }
    if(!Number.isInteger(year)) {
        throw new Error('year must be Integer');
    }
    if(year < 42){
        throw new Error('year must be more than 41');
    }
    const date = new Date(year, 2, 0);
    const days = date.getDate();
    return (29 === days);
};

module.exports = isLeapYear