function convertTime() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;

    let seconds, minutes, hours, days;

    switch (inputUnit) {
        case 'seconds':
            seconds = inputValue;
            minutes = inputValue / 60;
            hours = inputValue / 3600;
            days = inputValue / 86400;
            break;
        case 'minutes':
            seconds = inputValue * 60;
            minutes = inputValue;
            hours = inputValue / 60;
            days = inputValue / 1440;
            break;
        case 'hours':
            seconds = inputValue * 3600;
            minutes = inputValue * 60;
            hours = inputValue;
            days = inputValue / 24;
            break;
        case 'days':
            seconds = inputValue * 86400;
            minutes = inputValue * 1440;
            hours = inputValue * 24;
            days = inputValue;
            break;
        default:
            break;
    }

    document.getElementById('secondsResult').textContent = seconds.toFixed(2);
    document.getElementById('minutesResult').textContent = minutes.toFixed(2);
    document.getElementById('hoursResult').textContent = hours.toFixed(2);
    document.getElementById('daysResult').textContent = days.toFixed(2);
}
