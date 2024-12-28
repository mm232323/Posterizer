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
export function complexHash(str) {
  const prime1 = 31;
  const prime2 = 37;
  const prime3 = 41;
  let hash1 = 0;
  let hash2 = 1;
  let hash3 = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash1 = (hash1 * prime1 + char) % 1000000007;
    hash2 = (hash2 * prime2 + char) % 1000000009;
    hash3 = (hash3 * prime3 + char) % 1000000021;
  }

  return `${hash1.toString(16)}${hash2.toString(16)}${hash3.toString(16)}`;
}
