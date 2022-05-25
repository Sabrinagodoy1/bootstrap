let email = document.querySelector('#email')
let emailOk = false
let assuntoOk = false
let senha=document.querySelector('#senha')
function validaEmail() {
   let txtEmail = document.querySelector('#txtEmail') 

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
      txtEmail.innerHTML = 'E-mail inválido &#10060;'
      txtEmail.style.color = 'red'
   } else {
      txtEmail.style.display = 'none'
      
      emailOk = true
   }
}
function enviar() {
    if ( emailOk == true) {
       alert  ('completisso meu cumpade, Seja feliz!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }
 function validaSenha() {
    let txtSenha = document.querySelector('#txtSenha')
 
    if (senha.value.length < 5) {
       txtSenha.innerHTML = 'Muito pequenininha sua senha!!'
       txtSenha.style.color = 'red'
       txtSenha.style.display = 'block'
    } else {
       txtSenha.style.display = 'none'
       assuntoOk = true
    }
 }
 

$('#carousel-example').on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $('.carousel-item').length;
 
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});

