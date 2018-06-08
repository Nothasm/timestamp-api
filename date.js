
let dateCheck = (date) => {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(Number(date))) {
            resolve(Number(date));
        } else if (Date.parse(date)) {
            resolve(Date.parse(date));
        } else {
            reject("Invalid Date");
        }
    });
};

module.exports = {
    dateCheck
};
