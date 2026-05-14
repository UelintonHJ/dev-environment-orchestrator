#!/usr/bin/env node

import { createEnvironment } from "./commands/create";
import { doctorEnvironment } from "./commands/doctor";

const args = process.argv.slice(2);

const command = args[0];
const param = args[1];

switch (command) {
    case "create":
        if (!param) {
            console.log("❌ Missing environment name")
            process.exit(1);
        }

        createEnvironment(param);
        break;

    case "doctor":
        doctorEnvironment();
        break;

    default:
        console.log(`
DevSetup CLI
    
Commands:
    create <environment>    Create a development environment
        
Examples:
    devsetup create frontend
`);
}