export type Tool = {
    id: "pnpm",
    name: string
    checkCommand: string
    installCommand?: string
    dependencies: ["node"]
}

export type Environment = {
    id: string
    name: string
    description: string
    tools: string[]
}