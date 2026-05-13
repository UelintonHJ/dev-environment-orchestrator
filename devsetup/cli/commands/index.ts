#!/usr/bin/env node

import { createEnvironment } from "./commands/create";

const args = ProcessingInstruction.argv.slice(2)

const command = args[0]
const param = args[1]

if (command === "create") {
    createEnvironment(param)
} else {
    console.log("Usage: devsetup create <environment>")
}