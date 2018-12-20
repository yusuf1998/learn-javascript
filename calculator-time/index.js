const time = {
    getDate: (customDate = null) => {
        if (customDate) {
            return new Date(customDate);
        } else
            return new Date();
    },
    getNumberDate: (dateObject) => {
        return dateObject.getDate();
    },
    getNumberMonth: (dateObject) => {
        return dateObject.getMonth() + 1;
    },
    getMonthString: (dateObject) => {
        return dateObject.getMonth() + 1;
    },
    getNumberYear: (dateObject) => {
        return dateObject.getFullYear();
    },
    displayFull: (dateObject) => {
        const chosenDate = time.getNumberDate(dateObject);
        const chosenMonth = time.getNumberMonth(dateObject);
        const chosenYear = time.getNumberYear(dateObject);

        return `${chosenYear}-${chosenMonth}-${chosenDate}`
    },
    addition: () => {
        const d = new Date();
        const dateNow = document.getElementById('text-input-date1').value
        const dateInput = document.getElementById('text-input-date2').value
        const intDateInput = parseInt(dateInput);

        const formatDateNow = time.getDate(dateNow);
        const addDate = d.setDate(time.getNumberDate(formatDateNow) + intDateInput)
        const addDateFormat = time.getDate(addDate);
        // const displayFinalDate = time.displayFull(addDateFormat);

        document.getElementById("text-result").value = addDateFormat;

    },

}


const newLoadDate = time.displayFull(time.getDate());
document.getElementById("text-input-date1").value = newLoadDate;