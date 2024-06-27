export default function SigninForm() {
  return (
    <form className="p-[50px] pl-[70px]">
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Full name
        </label>
        <input
          type="text"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Phone
        </label>
        <input
          type="number"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Gender
        </label>
        <div
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        >
          <center>
            <label className="font-[200] text-[15px] mr-[10px]">Male</label>
            <input
              className="w-[17px] h-[17px] mr-[40px]"
              type="radio"
              name="gender"
            />
            <label className="font-[200] text-[15px] mr-[10px]">Female</label>
            <input
              className="w-[17px] h-[17px] mr-[40px]"
              type="radio"
              name="gender"
            />
            <label className="font-[200] text-[15px] mr-[10px]">Other</label>
            <input
              className="w-[17px] h-[17px] mr-[40px]"
              type="radio"
              name="gender"
            />
          </center>
        </div>
      </div>
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Email Address
        </label>
        <input
          type="email"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Password
        </label>
        <input
          type="password"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
      <div class="flex flex-col w-fit static max-w-[500px] mb-[8px]">
        <label
          for="input"
          class="text-[15px] text-[##818CF8] font-[200] relative top-[.5rem] ml-[13px] pr-[6px] pl-[6px] bg-[#0E121D] w-fit"
        >
          Check password
        </label>
        <input
          type="password"
          name="input"
          class="focus:outline-none pt-[11px] pb-[11px] pr-[10px] pl-[10px] text-[.75rem] bg-transparent border-[#adf0ea] border-[.5px] rounded-[2px] duration-[.5s] w-[560px] focus:border-[#13B7DB]"
        />
      </div>
      <button className="bg-gradient-to-r from-[#83C9C5] to-[#4997B0] p-[5px] w-[240px] h-[71px] rounded-[1px] text-[#0E141F] font-[100] text-[30px] hover:shadow-[0_7px_20px_0_#83c9c527] duration-[.5s] mt-[30px]">
        Sign up
      </button>
    </form>
  );
}
