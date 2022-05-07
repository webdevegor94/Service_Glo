const timer = (deadline) => {

    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimerRemaining = () => {

        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        if (hours < 10) hours = "0" + hours;
        if (minutes < 10) minutes = "0" + minutes;
        if (seconds < 10) seconds = "0" + seconds;

        return { timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimerRemaining()
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds

        if (getTime.timeRemaining <= 0) {
            clearInterval()
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'

            timerHours.style.color = 'red'
            timerMinutes.style.color = 'red'
            timerSeconds.style.color = 'red'
        }
    }
    updateClock()
    setInterval(updateClock, 1000)
}

export default timer