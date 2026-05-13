import type { Environment, Tool } from "../core/models/environment";

export const tools: Tool[] = [
    {
        id: "git",
        name: "Git",
        checkCommand: "git --version",
        installCommand: "winget install Git.Git"
    },
    {
        id: "node",
        name: "Node.js",
        checkCommand: "node --version",
        installCommand: "winget install OpenJS.NodeJS"
    },
    {
        id: "vscode",
        name: "VSCode",
        checkCommand: "code --version",
        installCommand: "winget install Microsoft.VisualStudioCode"
    }
]

export const environments: Environment[] = [
    {
        id: "frontend",
        name: "Frontend Developer",
        description: "React / Vite / UI development",
        tools: ["git", "node", "vscode"]
    }
]