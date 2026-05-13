const [,, command, target] = process.argv;

function createFrontend() {
    console.log("🚀 DevSetup: criando ambiente frontend...");
    console.log(`📦 Target: ${target}`);
}

function help() {
    console.log(`
DevSetup CLI

Comandos:
    create frontend  -> cria ambiente frontend
`);
}

switch (command) {
    case "create":
        if (target === "frontend") {
            createFrontend();
        } else {
            console.log("❌ Target não suportado:", target);
        }
        break;

    default:
        help();
}