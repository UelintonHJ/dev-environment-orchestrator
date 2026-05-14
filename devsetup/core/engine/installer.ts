import { execSync } from "child_process"
import os from "os"
import type { Tool } from "../models/environment"

export function installTool(tool: Tool) {
    const platform = os.platform()
    
    let command: string | undefined

    if (platform === "win32") {
        command = tool.installCommand?.windows
    }

    if (platform === "linux") {
        command = tool.installCommand?.linux
    }

    if (platform === "darwin") {
        command = tool.installCommand?.macos
    }

    if (!command) {
        console.log(`⚠️ No install command for ${tool.name}`)
        return
    }

    console.log(`📦 Installing ${tool.name}...`)

    try {
        execSync(command, { stdio: "inherit" })
        console.log(`✅ ${tool.name} installed`)
    } catch {
        console.log(`❌ Failed to install ${tool.name}`)
    }
}