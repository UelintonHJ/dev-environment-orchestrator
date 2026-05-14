import { tools } from "../../registry/tools"
import { runDoctor } from "../../core/engine/doctor"

export function doctorEnvironment() {
    console.log("🩺 Running environment diagnostics...\n")

    const results = runDoctor(tools)

    results.forEach(result => {
        const icon = result.healthy
            ? "✅"
            : "⚠️"

        console.log(`${icon} ${result.tool}`)

        result.issues.forEach(issue => {
            console.log(`   └─ ${issue.message}`)

            if (issue.fix) {
                console.log(`      💡 ${issue.fix}`)
            }
        })

        console.log("")
    })
}