$(document).ready(function () {
  $('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' })
  $('#cep').mask('00000-000', { placeholder: '00000-000' })
  $('#cpf').mask('000.000.000-00', { placeholder: '000.000.000-00' })

  $('form').validate({
    rules: {
      nome: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      telefone: {
        required: true
      },
      mensagem: {
        required: true
      },
      veiculoDeInteresse: {
        required: false
      },
      cep: {
        required: true
      },
      cpf: {
        required: true
      }
    },
    messages: {
      nome: 'Por favor inserir o nome completo',
      telefone: 'Por favor inseri o telefone',
      email: 'Por favor inserir o email de forma correta',
      cpf: 'Por favor inserir o número de CPF',
      cep: 'Por favor preencher o CEP'
    },
    submitHandler: function (form) {
      alert('Formulário enviado com sucesso')
      $(input).val('')
    },
    // invalidHandler: function(event, validador){
    //   let camposIncorretos = validador.numberOfInvalids()
    //   if (camposIncorretos){
    //     alert(`Existem ${camposIncorretos} campos incorretos`)
    //   }
    // }
  })
})
