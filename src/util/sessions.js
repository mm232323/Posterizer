import { complexHash } from "./user";
export function createSession(userId) {
  const expiresAt = new Date();
  const secret_id = complexHash(userId);
  return {
    userId,
    expiresAt: expiresAt.getDate(),
    iat: expiresAt.getUTCDate(),
    expiresAt: expiresAt.getFullYear + 2000,
    secId: secret_id,
  };
}
