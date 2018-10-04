function checkData() {
    var valid = true;
    var elems = document.contactsForm;
    elems.tel.pattern = "(\\+7|\\+3)[0-9]{9,11}";
    var textArea = elems.FIO.value;
    var wordCounter = textArea.split(' ').length;

    if ((elems.question.value === '')) {
        alert ( "Пожалуйста, напишите свой вопрос." );
        elems.question.focus();
        valid = false;
    }

    if (elems.email.value === '') {
        alert ( "Пожалуйста, заполните поле 'Ваш e-mail'." );
        elems.email.focus();
        valid = false;
    }

    if (elems.age.selectedIndex === 0) {
        alert ( "Пожалуйста, выберите Ваш возраст." );
        valid = false;
    }

    if ((elems.pol[0].checked === false) && (elems.pol[1].checked === false)) {
        alert ( "Пожалуйста, выберите Ваш пол." );
        valid = false;
    }


    if ((elems.tel.value === '')) {
        alert ( "Пожалуйста, заполните номер телефона в формате: +7 или +3, без пробелов, от 9 до 11 цифр, включая код." );
        elems.tel.focus();
        valid = false;
    }

    if ((wordCounter<3) || elems.FIO.value === '') {
        alert ( "Пожалуйста, заполните поле 'Ваше ФИО' полностью.");
        elems.FIO.focus();
        valid = false;
    }

    return valid;
}