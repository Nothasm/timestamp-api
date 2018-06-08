
let dateCheck = (date) => {
    return new Promise((resolve, reject) => {
        if (Number.isInteger(Number(date))) {
            resolve(Number(date));
        } else if (Date.parse(date)) {
            resolve(Date.parse(date));
        } else if (date == undefined) {
            resolve(Date.now());
        } else {
            reject("Invalid Date");
        }
    });
};

module.exports = {
    dateCheck
};
