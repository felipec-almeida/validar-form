class CPF {
    constructor(cpf) {
      this.cpf = cpf.replace(/\D+/g, "");
    }
  }
  CPF.prototype.validacaoCPF = function () {
    // Validações
    if (typeof this.cpf === "undefined") return console.error("CPF Inválido");
    if (this.cpf.length !== 11)
      return console.error("CPF Inválido (Menos que 11 Caracteres)");
    const cpfParcial = this.cpf.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const cpfParcial2 = this.cpf.slice(0, -1);
    const digito2 = this.criaDigito(cpfParcial2);
    if (digito1 !== Number(this.cpf.slice(9, -1)) && digito2 !== Number(this.cpf.slice(10))) {
      // console.log("O CPF é Inválido ou Não existe.");
      return false;
    }
    // alert("O CPF é Valido.");
    return true;
  };

  CPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let valorRegressivo = cpfArray.length + 1;

    const digito = cpfArray.reduce((acumulador, valorFinal) => {
      // console.log(valorFinal, valorRegressivo, valorRegressivo * valorFinal);
      acumulador += valorRegressivo * Number(valorFinal);
      valorRegressivo--;
      return acumulador;
    }, 0);

    return (11 - (digito % 11));
  };

  // function recebeEventoForm(evento) {
  //   evento.preventDefault();

  //   const valorCPF = form.querySelector("#user-cpf");
  //   const valor = new CPF(valorCPF.value);
  //   console.log(valor.validacaoCPF());
  // }

  // form.addEventListener("submit", recebeEventoForm);

