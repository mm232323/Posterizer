"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addPoster(state, event) {
  const errors = [];
  const title = event.get("title");
  const post_text = event.get("post_text");
  const id = event.get("userId");
  let img = event.get("img");
  if (title.trim().length < 5) errors.push("title");
  if (post_text.trim().length < 10) errors.push("post_text");
  if (errors.length > 0) return { errors };
  const post = { title, post_text, img, id };
  post.views = 0;
  post.reactions = 0;
  post.comments = [];
  post.date = new Date().toDateString();
  let response = await fetch(`http://localhost:8080/user/post`, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("/");
  redirect(`/home/${id}`);
}
export async function handleFollow(state, event) {
  const follower = event.get("follower");
  const followed = event.get("followed");
  const isFollowed = event.get("is_follow");
  const response = await fetch("http://localhost:8080/user/following", {
    method: "POST",
    body: JSON.stringify({
      followerId: follower,
      followedId: followed,
      isFollowed: isFollowed,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("/");
}
export async function addAvatar(state, event) {
  const avatar = event.get("avatar");
  const id = event.get("id");
  const data = new FormData();
  data.append("image", avatar);
  const response = await fetch("http://localhost:8080/user/add-avatar", {
    method: "POST",
    body: data,
  });
}

export async function handleDeleteNotif(notificationId, userId) {
  const response = await fetch(
    `http://localhost:8080/user/delete-notification/${userId}`,
    {
      method: "POST",
      body: JSON.stringify({ id: notificationId }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const resMessage = await response.json();
  revalidatePath("/");
}
