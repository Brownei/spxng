export function removeHyphen(str: string): string {
  return str.includes('-') ? str.replace(/-+/g, ' ') : str;
}

