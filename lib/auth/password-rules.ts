export const PASSWORD_RULES = {
    minLength: 12,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecial: true,
} as const;

export function validatePassword(password: string): string[] {
    const errors: string[] = [];

    if (password.length < PASSWORD_RULES.minLength) {
        errors.push(`at least ${PASSWORD_RULES.minLength} characters`);
    }
    if (PASSWORD_RULES.requireUppercase && !/[A-Z]/.test(password)) {
        errors.push('at least 1 uppercase letter');
    }
    if (PASSWORD_RULES.requireLowercase && !/[a-z]/.test(password)) {
        errors.push('at least 1 lowercase letter');
    }
    if (PASSWORD_RULES.requireNumber && !/[0-9]/.test(password)) {
        errors.push('at least 1 number');
    }
    if (PASSWORD_RULES.requireSpecial && !/[^A-Za-z0-9]/.test(password)) {
        errors.push('at least 1 special character');
    }

    return errors;
}
