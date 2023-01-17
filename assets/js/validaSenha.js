class Senhas {
  constructor(senha, repetirSenha) {
    this.formulario = document.querySelector("#form");
    this.senha = senha;
    this.repetirSenha = repetirSenha;
  }
}
Senhas.prototype.validaSenhaCaractere = function () {
    if(String(this.senha).length < 8) {

        console.error("A senha deve conter no mínimo 8 caracteres.");
        return false;

    }
    return true;
};

Senhas.prototype.validaSenhaIgual = function () {
  if (this.senha !== this.repetirSenha) {
    console.error("Ambas as senhas devem ser iguais.");
    return false;
  }
  return true;
};
