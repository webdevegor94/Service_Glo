const calculator = () => {
    const calcSquare = document.querySelector('.calc-square')

    calcSquare.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9.-]/gi, '');

    }, false);

    const calcCount = document.querySelector('.calc-count')

    calcCount.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9.-]/gi, '');

    }, false);

    const calcDay = document.querySelector('.calc-day')

    calcDay.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9.-]/gi, '');

    }, false);


}

export default calculator







