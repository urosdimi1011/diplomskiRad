export class SpinnerFunctions {

    static showSpinner() {
        document.getElementsByClassName("spinner-block")[0].classList.remove('hide');
    }

    static hideSpinner() {
        document.getElementsByClassName("spinner-block")[0].classList.add('hide');
    }

}