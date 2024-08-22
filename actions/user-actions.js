"use server";

import axios from "axios";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function addPoster(state, event) {
  const errors = [];
  const title = event.get("title");
  const post_text = event.get("post_text");
  const id = event.get("userId");
  let img = event.get("imageSelect");
  if (title.trim().length < 5) errors.push("title");
  if (post_text.trim().length < 10) errors.push("post_text");
  if (errors.length > 0) return { errors };
  const post = { title, post_text, img, imgName: img.name, id };
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
  const data = new FormData();
  data.append("image", img);
  const resMessage = await axios.post(
    `http://localhost:8080/user/poster/${id}`,
    data
  );
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

export async function handleDeleteNotif(
  notificationType,
  notificationId,
  userId
) {
  const response = await fetch(
    `http://localhost:8080/user/delete-notification/${userId}`,
    {
      method: "POST",
      body: JSON.stringify({ id: notificationId, type: notificationType }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const resMessage = await response.json();
  revalidatePath("/");
}

export async function handleLike(userId, likerId, postId) {
  const details = { userId, likerId, postId };
  const response = await fetch("http://localhost:8080/user/like-post", {
    method: "POST",
    body: JSON.stringify(details),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("done");
}
export async function handleComment(event) {
  const data = Object.fromEntries(event);
  const comment = event.get("comment");
  if (comment.length <= 5) return;
  const response = await fetch("http://localhost:8080/user/add-comment", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
