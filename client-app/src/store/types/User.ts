export default interface User {
    id?: string | number,
    email: string,
    name?: string,
    emailVerifiedAt?: string | null,
    createdAt? : string | null,
}