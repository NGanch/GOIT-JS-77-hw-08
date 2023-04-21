import throttle from 'lodash.throttle'

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

    function onFormInput(evt){
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
        
    }

    function populateTextarea(){
        const saveMessage = localStorage.getItem(LOCALSTORAGE_KEY);
        const dog = JSON.parse(saveMessage);

        if(saveMessage){
            console.log(saveMessage)
            form.email.value = dog.email;
            form.message.value = dog.message;
        }
    }

    populateTextarea();

    function onFormSubmit(evt){
        evt.preventDefault();
        console.log(formData)
        evt.currentTarget.reset();
        localStorage.removeItem(LOCALSTORAGE_KEY);
    }
