import pako from "pako";
import type { Portfolio } from "./types";

export function encode(data: Portfolio): string {
  const json = JSON.stringify(data);
  const compressed = pako.deflate(new TextEncoder().encode(json));
  const base64 = btoa(String.fromCharCode(...compressed));
  // Make URL-safe: + → -, / → _, remove padding =
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decode(hash: string): Portfolio | null {
  try {
    // Restore from URL-safe base64
    let base64 = hash.replace(/-/g, "+").replace(/_/g, "/");
    // Re-add padding
    while (base64.length % 4 !== 0) {
      base64 += "=";
    }
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const decompressed = pako.inflate(bytes);
    const json = new TextDecoder().decode(decompressed);
    return JSON.parse(json) as Portfolio;
  } catch {
    return null;
  }
}
