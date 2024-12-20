export async function userVerified(email, password) {
  const response = await fetch(
    `${process.env.HOST_SERVER_PORT}/login/check-user`,
    {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 1 },
    }
  );
  const isvarified = await response.json();
  return isvarified;
}
export function simpleHash(password) {
  let hash = 0;
  if (password.length === 0) return hash;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash.toString();
}
