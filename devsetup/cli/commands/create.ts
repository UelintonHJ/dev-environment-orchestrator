import { environments } from "../../registry/environments";
import { tools } from "../../registry/tools";
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

    console.log(`🚀 Setting up: ${env.name}`);
    console.log(`📖 ${env.description}\n`);

    const selectedTools = resolveEnvironment(env, tools)

    const detection = detectTools(selectedTools)

    const toInstall = selectedTools.filter(tool => {
        const detected = detection.find(d => d.id === tool.id);
        return !detected?.installed;
    })

    if (toInstall.length === 0) {
        console.log("✅ All tools already installed");
        return;
    }

    console.log("📦 Tools to install:")

    toInstall.forEach(tool => {
        console.log(` - ${tool.name}`);
    });

    console.log("");

    for (const tool of toInstall) {
        installTool(tool)
    }

    const result = validateTools(selectedTools);

    if(result.success) {
        console.log("🎉 Environment ready!");
    } else {
        console.log("⚠️ Some tools failed:");
        
        result.failed.forEach(tool => {
            console.log(` - ${tool.id}`);
        });
    }
}