import semver from "semver"
import { execSync } from "child_process"
import type { Tool, DoctorIssue } from "../models/environment"
import { detectTool } from "./detector"

export type DoctorResult = {
    tool: string
    healthy: boolean
    issues: DoctorIssue[]
}

export function runDoctor(tools: Tool[]): DoctorResult[] {
    return tools.map(tool => {
        const issues: DoctorIssue[] = []
        const installed = detectTool(tool)
        if(!installed) {
            issues.push({
                type: "missing",
                message: `${tool.name} is not installed`,
                fix: "Install the tool"
            })
            return {
                tool: tool.name,
                healthy: false,
                issues
            }
        }
        if (tool.versionCommand && tool.requiredVersion) {
            try {
                const raw = execSync(tool.versionCommand)
                    .toString()
                    .trim()
                const version = raw.replace(/[^\d.]/g, "")
                if (!semver.satisfies(version, tool.requiredVersion)) {
                    issues.push({
                        type: "version",
                        message: `Version ${version} does not satisfy ${tool.requiredVersion}`,
                        fix: `Update ${tool.name}`
                    })
                }
            } catch {
                issues.push({
                    type: "version",
                    message: "Failed to check version"
                })
            }
        }
        if (tool.doctor?.diagnose) {
            issues.push(...tool.doctor.diagnose())
        }
        return {
            tool: tool.name,
            healthy: issues.length === 0,
            issues
        }
    })
}