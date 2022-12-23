export class DocumentValidation {
  rg(value: string) {
    // TODO: Implementar validação de RG
    if (!value || value.length > 15) return false;

    return true
  }

  cpf(value: string) {
    let sum;
    let rest;
    sum = 0;
    if (!value || value.length > 11) return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(value.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(value.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(value.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11)) rest = 0;
    if (rest != parseInt(value.substring(10, 11))) return false;
    return true;
  }
}