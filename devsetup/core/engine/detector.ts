import { execSync } from "child_process"
import type { Tool } from "../models/environment"

export type DetectionResult = {
    id: string
    name: string
    installed: boolean
}

export function detectTool(tool: Tool): boolean {
    try {
        execSync(tool.checkCommand, { stdio: "ignore" })
        return true
    } catch {
        return false
    }
}

export function detectTools(tools: Tool[]): DetectionResult[] {
    return tools.map(tool => ({
        id: tool.id,
        name: tool.name,
        installed: detectTool(tool)
    }))
}