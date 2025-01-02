export function removeHyphen(str: string): string {
  return str.includes('-') ? str.replace(/-+/g, ' ') : str;
}

export function addHyphen(str: string): string {
  return str.includes(' ') ? str.replace(/\s+/g, '-') : str;
}


