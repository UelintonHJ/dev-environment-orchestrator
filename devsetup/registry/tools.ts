import type { Tool } from "../core/models/environment"

export const tools: Tool[] = [
    {
        id: "git",
        name: "Git",
        checkCommand: "git --version",
        installCommand: {
            windows: "winget install Git.Git"
        }
    },
    {
        id: "node",
        name: "Node.js",
        checkCommand: "node --version",
        versionCommand: "node --version",
        requiredVersion: ">=20.0.0",
        installCommand: {
            windows: "winget install OpenJS.NodeJS"
        }
    },
    {
        id: "pnpm",
        name: "pnpm",
        checkCommand: "pnpm --version",
        installCommand: {
            windows: "npm install -g pnpm"
        },
        dependencies: ["node"] 
    },
    {
        id: "vscode",
        name: "VSCode",
        checkCommand: "code --version",
        installCommand: { 
            windows: "winget install Microsoft.VisualStudioCode"
        }
    }
]