document.getElementById("nameform").addEventListener("submit", checkForm);

function checkForm(event){
    event.preventDefault();
    var el = document.getElementById('nameform');

    var name = el.name.value;
    var pass = el.pass.value;
    var state = el.state.value;

    var error = "";

    if (name == '' || pass == '' || state == '')
        error = 'Заполните все поля!!!';
    else if (name.length < 1)
        error = 'Имя должно иметь больше одной буквы';
    else if (pass.length < 4)
        error = 'Пароль должен иметь больше четырех букв';
        
    if (error != ""){
        alert(error)
    } else{
        alert('Регистрация завершена')
        window.location = 'https://rt.pornhub.com/'
    }
}




