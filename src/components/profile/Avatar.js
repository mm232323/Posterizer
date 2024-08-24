import axios from "axios";
import { revalidatePath } from "next/cache";
import React from "react";
export default function Avatar({ id }) {
  async function submitAvatar(event) {
    "use server";
    const data = new FormData();
    const id = event.get("id");
    const avatar = event.get("avatar");
    data.append("image", avatar);
    const response = await axios.post(
      `http://${process.env.API}/user/add-avatar/${id}`,
      data
    );
    revalidatePath("/");
  }
  return (
    <div className="w-[293px] bg-black/70 h-[293px] opacity-0 hover:opacity-100 duration-400 cursor-pointer avatar absolute rounded-full top-[196px] left-[158.5px]">
      <h3 className="text-[30px] text-center pt-[100px] duration-400">
        Change avatar
      </h3>
      <form
        action={submitAvatar}
        encType="multipart/form-data"
        className="relative left-[50%] translate-x-[-50%]"
      >
        <label
          className="block font-[200] text-[18px] pb-[20px] cursor-pointer duration-400 hover:text-blue-500 text-center"
          htmlFor="avatar"
        >
          choose one
        </label>
        <input
          name="avatar"
          id="avatar"
          accept="image/*"
          type="file"
          className="hidden"
        />
        <input name="id" type="text" defaultValue={id} className="hidden" />
        <button
          type="submit"
          className="font-[200] relative left-[50%] translate-x-[-50%] duration-400 border-white border-1 bg-blue-900 text-white p-[10px] rounded-[10px] text-[16px] hover:bg-white hover:text-blue-900 hover:border-blue-900"
        >
          submit
        </button>
      </form>
    </div>
  );
}
