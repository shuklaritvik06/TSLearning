type combine = number | string;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: combine, b: combine) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
