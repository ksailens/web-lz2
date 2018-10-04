function checkTestData() {
    var valid = true;
    var elems = document.testForm;

    var answerCounter = elems.answer.value.split(' ').length;
    var wordCounter = elems.FIO.value.split(' ').length;

    if (elems.answer.value === '') {
        alert ( "Пожалуйста, ответьте на Вопрос №1. В ответе должно быть не менее 30 слов." );
        alert("Сейчас слов: 0");
        elems.answer.focus();
        valid = false;
    } else if (answerCounter<30) {
        alert ( "Пожалуйста, ответьте на Вопрос №1. В ответе должно быть не менее 30 слов." );
        alert("Сейчас слов: " + answerCounter);
        elems.answer.focus();
        valid = false;
    }

    if (elems.groups.selectedIndex === 0) {
        alert ( "Пожалуйста, выберите группу, в которой Вы обучаетесь!" );
        valid = false;
    }

    if ((elems.answer_r[0].checked === false) && (elems.answer_r[1].checked === false) && (elems.answer_r[2].checked === false)) {
        alert ( "Пожалуйста, ответьте на Вопрос №2 - выберите один из вариантов!" );
        valid = false;
    }

    if (elems.answ_sel.selectedIndex === 0) {
        alert ( "Пожалуйста, ответьте на Вопрос №3 - выберите один из вариантов!" );
        elems.answ_sel.focus();
        valid = false;
    }

    if ((wordCounter<3) || elems.FIO.value === '') {
        alert ( "Пожалуйста, заполните поле 'Ваше ФИО' полностью.");
        elems.FIO.focus();
        valid = false;
    }

    return valid;
}