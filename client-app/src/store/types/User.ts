export default interface User {
    email: string,
    name?: string
    emailVerifiedAt?: string | null
    createdAt? : string | null
}