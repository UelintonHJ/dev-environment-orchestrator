import type { Environment, Tool } from "../models/environment";

export function resolveEnvironment(
    env: Environment,
    tools: Tool[]
): Tool[] {
    return env.tools
        .map(id => tools.find(t => t.id === id))
        .filter(Boolean) as Tool[]
}