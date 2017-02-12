function verifiqueFormularioEmBranco() {
    var nome = document.getElementById('nome').value;

    if (nome == "") {
        alert("Preencha o nome");
        document.getElementById('nome').style.borderColor = "red";
        //há diferença em colocar o return;
        return;
    }
    alert("fim");
}

//http://www.w3schools.com/js/js_validation.asp
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    //alert(x);
    if (x == "") {
        alert("Não pode ser em branco");
        return false;
    }
}

function soNumero() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Isto não é válido";
    } else {
        text = "OK";
    }
    document.getElementById("demo").innerHTML = text;
}

//http://www.w3schools.com/js/js_validation_api.asp
/*
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement
 */
function soNumero1() {
    var inpObj = document.getElementById("id1");
    console.log(inpObj);
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo1").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo1").innerHTML = "Input OK";
    }
}

function soNumero2() {
    var txt = "";
    if (document.getElementById("idMaior").validity.rangeOverflow) {
        txt = "Valor maior do que o permitido";
    } else if (document.getElementById("idMenor").validity.rangeUnderflow) {
        txt = "Valor menor do que o permitido";
    } else {
        txt = "Input OK";
    }
    document.getElementById("demo2").innerHTML = txt;
}

//https://www.tutorialspoint.com/javascript/javascript_form_validations.htm
function validate() {

    var email = document.meuForm.EMail.value;

    if (document.meuForm.Name.value == "") {
        alert("Digite o seu nome!");
        document.meuForm.Name.focus();
        return false;
    } else if (email == "") {
        alert("Digite o seu Email!");
        document.meuForm.EMail.focus();
        return false;

    } else {
        var valido = validateEmail(email);

        if (valido == false) {
            document.meuForm.EMail.focus();
            return false;
        }
    }

    if (document.meuForm.Zip.value == "" ||
            isNaN(document.meuForm.Zip.value) ||
            document.meuForm.Zip.value.length != 8) {
        alert("Digite o seu cep ########.");
        document.meuForm.Zip.focus();
        return false;
    } else if (document.meuForm.Country.value == "-1") {
        alert("Escolha o seu país!");
        return false;
    } else {
        alert("OK");
        return(true);
    }

}

function validateEmail(email) {
    var atpos = email.indexOf("@");
    console.log('atpos ' + atpos);
    var dotpos = email.lastIndexOf(".");
    console.log('dotpos ' + dotpos);

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Entre com um email correto.")
        document.myForm.EMail.focus();
        return false;
    }
    return(true);
}

/*
 * validações de campos
 * http://parsleyjs.org/
 * http://codepen.io/zslabs/pen/eNegqY
 */

//http://www.the-art-of-web.com/javascript/validate/
//https://www.youtube.com/watch?v=_Z-0cwONN6c
function checkForm(form)
{
    // validation fails if the input is blank
    if (form.inputfield.value == "") {
        alert("Erro: Input está vazio!");
        form.inputfield.focus();
        return false;
    }

    //http://turing.com.br/material/regex/introducao.html
    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w]+$/;
   // var re = /^[\w a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;

    // validation fails if the input doesn't match our regular expression
    if (!re.test(form.inputfield.value)) {
        alert("Erro: Input contém caracteres inválidos!");
        form.inputfield.focus();
        return false;
    } else {
        alert("OK");
        // validation was successful
        return true;
    }


}