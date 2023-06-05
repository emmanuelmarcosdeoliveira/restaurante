$("#telefone").mask("(00)00000-0000");

$("form").validate({
  rules: {
    nome: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    telefone: {
      required: true,
    },
    mensagem: {
      required: true,
    },
  },
  messages: {
    nome: "Por favor, insira seu nome ",
    email: "Por favor digite um email valido",
    telefone: "Digite um numero de telefone celular",
    mensagem: "Digite uma Mensagem",
  },
  submitHandler: function (form) {
    console.log(form);
  },
  invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
      alert(`Existem ${camposIncorretos} campos Incorretos`);
    }
  },
});
