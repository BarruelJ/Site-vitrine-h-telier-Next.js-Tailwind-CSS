export const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isValidPhone = (v) => /^\+?[\d\s\-()\u0028\u0029]{10,}$/.test(v);
export const isValidName = (v) => v.trim().length >= 2;