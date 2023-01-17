class Escopo {
  constructor() {
    this.formulario = document.querySelector("#form");
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const checkFields = this.isValid();
  }

  isValid() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.formulario.querySelectorAll("input")) {
      const label = field.previousElementSibling.innerHTML;
      const senha = this.formulario.querySelector("#user-password");
      const repetirSenha = this.formulario.querySelector("#user-password2");

      if (!field.value) {
        this.createError(field, `<small>Campo ${label} é obrigatório.</small>`);
        valid = false;
      }

      if (field.classList.contains("user-cpf")) {
        if (!this.validaCPF(field)) valid = false;
      }

      if (field.classList.contains("user-password")) {
        if (!this.validaSenha(field, senha.value, repetirSenha.value)) valid = false;
      }
    }
  }

  validaSenha(field, senha, repetirSenha) {
    const senhas = new Senhas(senha, repetirSenha);
    if (!senhas.validaSenhaIgual()) {
      this.createError(field, `<small>Senhas devem ser iguais.</small>`);
    }

    if (!senhas.validaSenhaCaractere()) {
      this.createError(
        field,
        `<small>A senha deve conter no mínimo 8 caracteres</small>`
      );
    }
  }

  validaCPF(field) {
    const cpf = new CPF(field.value);
    if (!cpf.validacaoCPF()) {
      this.createError(field, `<small>CPF Inválido</small>`);
    }
  }

  createError(field, message) {
    const div = document.createElement("div");
    div.innerHTML =
      `<i><img class="visible" src="./assets/img/error-icon.svg"alt="error-image"></i>` +
      message;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const callEscopo = new Escopo();
