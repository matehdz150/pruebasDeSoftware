const { message, warn, fail } = require("danger");

if (!danger.github.pr.body || danger.github.pr.body.length < 10) {
  warn("Agrega una mejor descripción al Pull Request.");
}

const modifiedFiles = danger.git.modified_files;
if (modifiedFiles.includes("package-lock.json")) {
  fail("No debes modificar `package-lock.json` directamente.");
}

message("Todo se ve bien hasta ahora.");
