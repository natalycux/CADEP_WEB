module.exports = function(data) {
  if (!data.paciente || !data.paciente.id) {
    return "perfil/sin-id/index.html";
  }
  return `perfil/${data.paciente.id}/index.html`;
};
