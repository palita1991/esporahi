export default function fechaActual() {
  const f = new Date();
  const dia = f.getDate() < 10 ? "0" + f.getDate() : f.getDate();
  const mes =
    f.getMonth() + 1 < 10 ? "0" + (f.getMonth() + 1) : f.getMonth() + 1;
  const hoy = f.getFullYear() + "-" + mes + "-" + dia;
  return hoy;
}
