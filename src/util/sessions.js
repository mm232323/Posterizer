import bcrypt from "bcrypt";
export function createSession(userId) {
  const expiresAt = new Date();
  const secret_id = bcrypt.hash(userId);
  return {
    userId,
    expiresAt: expiresAt.getDate(),
    iat: expiresAt.getUTCDate(),
    expiresAt: expiresAt.getFullYear + 2000,
    secId: secret_id,
  };
}
