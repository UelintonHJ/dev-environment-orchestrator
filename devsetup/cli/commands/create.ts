import { environments } from "../../registry/environments";
import { tools } from "../../registry/environments";
import { resolveEnvironment } from "../../core/engine/resolver";
import { detectTools } from "../../core/engine/detector";
import { installTool } from "../../core/engine/installer";
import { validateTools } from "../../core/engine/validator";

export function createEnvironment(envId: string) {
    const env = environments.find(e => e.id === envId)

    if (!env) {
        console.error("❌ Environment not found")
        return
    }

    console.log(`🚀 Setting up: ${env.name}`)

    const selectedTools = resolveEnvironment(env, tools)

    const detection = detectTools(selectedTools)

    const toInstall = selectedTools.filter(t =>
        !detection.find(d => d.id === t.id)?.installed
    )

    console.log(`📦 Tools to install: ${toInstall.map(t => t.name).join(", ")}`)

    for (const tool of toInstall) {
        installTool(tool)
    }

    const result = validateTools(selectedTools)

    if(result.success) {
        console.log("🎉 Environment ready!")
    } else {
        console.log("⚠️ Some tools failed:")
        console.log(result.failed)
    }
}