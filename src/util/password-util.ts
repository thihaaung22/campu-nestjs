import * as bcrypt from "bcrypt";

export const hashInput = (text: string, saltRounds = 10): string => {
    const hashedString = bcrypt.hashSync(text, saltRounds);
    return hashedString
}

export const compareHash = (text: string, encrypted: string): boolean => {
    return bcrypt.compareSync(text, encrypted)
}