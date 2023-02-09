// Block with form

function validation(form) {
    
    function removeError(input) {
        const parent = input.parentNode;
        
        if (parent.classList.contains('form__input-box_error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('form__input-box_error');
        };
    };
    
    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');

        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;

        parent.classList.add('form__input-box_error');

        parent.append(errorLabel);
    };

    let result = true;

    // Checking for empty fields and maximum number of symbols

    const allInputs = form.querySelectorAll('.form__input');

    for (const input of allInputs) {
        
        removeError(input);

        if (input.dataset.maxLength) {
            removeError(input);

            if (input.value.length > input.dataset.maxLength) {                
                createError(input, `Максимальное количество символов: ${input.dataset.maxLength}`);
                result = false;
            };
        };     

        if (input.value == "") {
            createError(input, 'Поле не заполнено');
            result = false;
        };
    };

    return result;
}

const formMessage = document.getElementById('add-form');

formMessage.addEventListener('submit', e => {
    e.preventDefault();

    if (validation(formMessage) == true) {
        alert('Спасибо! Данные были успешно отправлены')
        };
})