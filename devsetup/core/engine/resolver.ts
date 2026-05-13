import type { Environment, Tool } from "../models/environment";

export function resolveEnvironment(
    env: Environment,
    tools: Tool[]
): Tool[] {
    const resolved = new Map<string, Tool>();

    function resolvedTool(toolId: string) {
        const tool = tools.find(t => t.id === toolId);

        if (!tool) return;

        resolved.set(tool.id, tool);

        tool.dependencies?.forEach(dep => {
            resolvedTool(dep);
        });
    }

    env.tools.forEach(resolvedTool);

    return Array.from(resolved.values());
}