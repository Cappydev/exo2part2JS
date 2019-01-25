function focusLost() {
  alert('Merci de votre participation');
}

function catchEnter(event) {
  var regexName = /^[A-Za-z\-éèë]+$/;
  var lastname = document.getElementById('lastname').value;
    if(event.keyCode === 13){
      event.preventDefault();
      if(regexName.test(lastname)){
        alert('Merci de votre renseignement');
      }else{
        alert('un prénom valide merci !');
      }
    }
}
