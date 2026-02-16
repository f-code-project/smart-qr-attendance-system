class Base64Utils {
  static encodeBase64 = (str: string): string => {
    const bytes = new TextEncoder().encode(str);
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
  };

  static decodeBase64 = (base64: string): string => {
    const binString = atob(base64);
    const bytes = Uint8Array.from(binString, (char) => char.codePointAt(0)!);
    return new TextDecoder().decode(bytes);
  };
}

export default Base64Utils;
