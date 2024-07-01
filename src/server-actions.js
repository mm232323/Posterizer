"use server";
export async function sendMessage(state, formData) {
  const errors = [];
  const data = Object.fromEntries(formData);
  const first_name = formData.get("firstName");
  const last_name = formData.get("lastName");
  const phone = formData.get("phone_number");
  const email = formData.get("email");
  const gender = formData.get("gender");
  const message = formData.get("message");
  if (first_name.trim().length == 0) errors.push("first_name");
  if (last_name.trim().length == 0) errors.push("last_name");
  if (phone.trim().length !== 11) errors.push("phone");
  if (
    !email.includes(".") ||
    !email.includes("@") ||
    email.slice(0, email.indexOf("@")).length == 0 ||
    email.slice(email.indexOf("@") + 1, email.indexOf(".")).length == 0 ||
    email.slice(email.indexOf(".") + 1).length == 0
  )
    errors.push("email");
  if (gender != "on") errors.push("gender");
  if (message.trim().length < 5) errors.push("message");
  if (errors.length > 0) return { errors };
  else {
    await fetch("http://localhost:8080/contact/add-message", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return {errors}
}
