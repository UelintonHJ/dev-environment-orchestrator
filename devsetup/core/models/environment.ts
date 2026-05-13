export type Tool = {
    id: string
    name: string
    checkCommand: string
    installCommand?: string
    dependencies?: string[]
}

export type Environment = {
    id: string
    name: string
    description: string
    tools: string[]
}