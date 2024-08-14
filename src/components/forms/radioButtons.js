"use client";
export default function RadioButtons({ state, onHandleGender }) {
  return (
    <div
      name="gender"
      className={`focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB] ${
        state?.errors.gender
          ? "text-red-400 border-red-300 focus:border-red-500"
          : "text-white"
      }`}
    >
      <center>
        <label className="font-[200] text-[15px] mr-[10px]">Male</label>
        <input
          className="w-[17px] h-[17px] mr-[40px]"
          type="radio"
          name="gender"
          onClick={() => onHandleGender("Male")}
        />
        <label className="font-[200] text-[15px] mr-[10px]">Female</label>
        <input
          className="w-[17px] h-[17px] mr-[40px]"
          type="radio"
          name="gender"
          onClick={() => onHandleGender("Female")}
        />
        <label className="font-[200] text-[15px] mr-[10px]">Other</label>
        <input
          className="w-[17px] h-[17px] mr-[40px]"
          type="radio"
          name="gender"
          onClick={() => onHandleGender("Other")}
        />
      </center>
    </div>
  );
}
