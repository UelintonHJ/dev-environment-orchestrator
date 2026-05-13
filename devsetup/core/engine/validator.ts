import type { Tool } from "../models/environment"
import { detectTool } from "./detector"

export function validateTools(tools: Tool[]) {
    const results = tools.map(tool => ({
        id: tool.id,
        ok: detectTool(tool)
    }))

    const failed = results.filter(r => !r.ok)

    return {
        success: failed.length === 0,
        failed
    }
}