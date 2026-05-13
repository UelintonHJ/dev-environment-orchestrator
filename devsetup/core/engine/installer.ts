import { execSync } from "child_process"
import type { Tool } from "../models/environment"

export function installTool(tool: Tool) {
    if (!tool.installCommand) {
        console.log(`⚠️ No install command for ${tool.name}`)
        return
    }

    console.log(`📦 Installing ${tool.name}...`)

    try {
        execSync(tool.installCommand, { stdio: "inherit"})
        console.log(`✅ ${tool.name} installed`)
    } catch (err) {
        console.error(`❌ Failed to install ${tool.name}`)
    }
}