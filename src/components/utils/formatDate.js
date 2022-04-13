export function Data(e) {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  function addZero(numero) {
    if (numero <= 9) return '0' + numero
    else return numero
  }

  let data = new Date(e)

  const formatted =
    meses[data.getMonth()] +
    ' ' +
    addZero(data.getDate()) +
    ', ' +
    data.getFullYear()
  return formatted
}
