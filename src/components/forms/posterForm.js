"use client";
import { useRef, useState } from "react";
import { LuUploadCloud } from "react-icons/lu";
import { useFormState } from "react-dom";
import { addPoster } from "../../../actions/user-actions";
import Image from "next/image";
import LoadingIndicator from "../ui/loadingIndicator";
export default function PosterForm({ id }) {
  const [state, action] = useFormState(addPoster, { errors: [] });
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const imageRef = useRef();
  function uploadImage() {
    imageRef.current.click();
  }
  function addImage() {
    setSelectedFile((prevFile) => imageRef.current.files[0]);
    console.log(selectedFile);
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    reader.onloadstart = () => {
      setIsLoading(true);
    };
    reader.onloadend = () => {
      setSelectedImg(reader.result);
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  }
  return (
    <form
      className="[@media(min-width:770px)]:p-[50px] [@media(min-width:770px)]:pl-[70px] [@media(max-width:890px)]:pl-[30px] [@media(max-width:770px)]:p-0 [@media(max-width:770px)]:relative [@media(max-width:770px)]:left-1/2 [@media(max-width:770px)]:translate-x-[-50%] w-fit [@media(max-width:600px)]:top-[600px] [@media(max-width:770px)]:top-[750px]"
      action={action}
    >
      <input type="text" name="userId" defaultValue={id} className="hidden" />
      <div className="flex flex-col w-fit static max-w-[700px] mb-[25px]">
        <label
          htmlFor="title"
          className={`text-[18px] font-[200] relative top-[2px] mb-[5px] pr-[6px] pl-[6px] w-fit duration-400 ${
            state.errors.includes("title") ? "text-red-500" : "text-[##818CF8]"
          }`}
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[.5px] rounded-[2px] duration-[.5s] w-[700px] z-10 ${
            state.errors.includes("title")
              ? "focus:border-[#b82b2b] border-[#b14d4d] text-red-500"
              : "focus:border-[#402bb8] border-[#4d6db1] text-white"
          }`}
        />
      </div>
      <div className="flex flex-col w-fit static max-w-[700px] mb-[8px]">
        <label
          htmlFor="post_text"
          className={`text-[18px] font-[200] relative top-[2px] mb-[5px] pr-[6px] pl-[6px] w-fit duration-400 ${
            state.errors.includes("post_text")
              ? "focus:border-[#b82b2b] border-[#b14d4d] text-red-500"
              : "focus:border-[#402bb8] border-[#4d6db1] text-white"
          }`}
        >
          Post text
        </label>
        <textarea
          type="text"
          name="post_text"
          className={`focus:outline-none pt-[11px] max-w-[700px] min-h-[200px] max-h-[500px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[.5px] rounded-[2px] duration-[.5s] w-[700px] z-10 ${
            state.errors.includes("post_text")
              ? "focus:border-[#b82b2b] border-[#b14d4d] text-red-500"
              : "focus:border-[#402bb8] border-[#4d6db1] text-white"
          }`}
        />
      </div>
      <input
        type="text"
        defaultValue={selectedFile}
        className="hidden"
        name="img"
      />
      <div className="bg-white/10 backdrop-blur-[5px] mt-[40px] rounded-[2px] w-[700px] h-[200px]">
        <LuUploadCloud
          color="white"
          className="relative top-[30px] opacity-60"
          size={80}
        />
        <h1 className="text-[20px] font-[100] relative top-[50px]">
          Upload automatically,{" "}
          <span className="text-[#377dff] cursor-pointer" onClick={uploadImage}>
            or Search in your device
          </span>
        </h1>
        <input
          name="imageSelect"
          accept="image/*"
          onChange={addImage}
          type="file"
          ref={imageRef}
          className="hidden"
        />
      </div>
      {isLoading && <LoadingIndicator />}
      {selectedImg && (
        <div className="w-full top-[30px] mb-[30px] h-full rounded-[5px] relative">
          <Image
            src={selectedImg}
            alt="selected image"
            width={399}
            height={399}
            className="rounded-[10px]"
          />
        </div>
      )}
      <button
        className={`p-[5px] w-[700px] h-[71px] rounded-[2px] text-white font-[100] text-[30px] hover:shadow-[0_7px_20px_0_#1f70b72a] border-1 border-[#ffffff00] duration-[.5s] mt-[30px] ${
          !state.errors
            ? "bg-transparent border-[#3C308F]"
            : "bg-gradient-to-r from-[#1F71B7] to-[#3C308F] "
        }`}
      >
        {!state.errors ? "Posting..." : "Post"}
      </button>
    </form>
  );
}
