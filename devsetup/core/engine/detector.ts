import { execSync } from "child_process"
import type { Tool } from "../models/environment"

export function detectTool(tool: Tool): boolean {
    try {
        execSync(tool.checkCommand, { stdio: "ignore" })
        return true
    } catch {
        return false
    }
}

export function detectTools(tools: Tool[]) {
    return tools.map(t => ({
        id: t.id,
        installed: detectTool(t)
    }))
}