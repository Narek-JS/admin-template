const cutEmail = (email: string, length: number = 10): string => {
  if (email.length <= length) {
    return email;
  }

  const [emailNamePart, emailHostPart] = email.split("@");

  const surplusCharacterCount = emailNamePart.length - length;
  const trimmedSurplusEmailLen = emailNamePart.length - surplusCharacterCount;

  return emailNamePart.slice(0, trimmedSurplusEmailLen) + "..@" + emailHostPart;
};

export { cutEmail };
