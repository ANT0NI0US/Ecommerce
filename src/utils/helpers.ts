export const isOnlySpaces = (value: string) => {
  return !value?.trim();
};

export const isPasswordValid = (value: string) => {
  // Add your custom password validation logic here
  const containsCharacters = /[a-zA-Z]/.test(value);
  const containsSpecialCases = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  const containsNumbers = /\d/.test(value);
  const containsUpperCaseLetter = /[A-Z]/.test(value);

  return (
    containsCharacters &&
    containsSpecialCases &&
    containsNumbers &&
    containsUpperCaseLetter
  );
};
