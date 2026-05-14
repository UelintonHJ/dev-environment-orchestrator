export type DoctorIssue = {
    type: "missing" | "version" | "path" | "permission"
    message: string
    fix?: string
}

export type Tool = {
    id: string,
    name: string
    checkCommand: string
    versionCommand?: string
    requiredVersion?: string
    installCommand?: {
        windows?: string
        linux?: string
        macos?: string
    }
    doctor?: () => DoctorIssue[]
    dependencies?: string[]
}

export type Environment = {
    id: string
    name: string
    description: string
    tools: string[]
}