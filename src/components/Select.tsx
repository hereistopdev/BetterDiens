import Image from "next/image";
import { CustomSelectPropsType } from "@/utils";

export function CustomSelect({
  placeholder,
  selectedValue,
  setSelectedValue,
  optionData,
  customStyle,
}: CustomSelectPropsType) {
  return (
    <div className="relative">
      <select
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
        className={`px-4 py-2 w-full sm:w-32 h-14 bg-white shadow-lg cursor-pointer
                  font-semibold font-[family-name:var(--font-outfit)] pr-10 appearance-none 
                  ${!selectedValue ? "text-[#909090]" : "text-black"} ${
          customStyle && customStyle
        }`}
      >
        <option value="" className="text-[#909090]">
          {placeholder}
        </option>
        {optionData.map((item, index) => (
          <option key={index} value={item} className="text-black">
            {item}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <Image
          src="/dropdown.png"
          alt="Dropdown"
          width={9}
          height={5}
          className="transition-transform duration-200"
        />
      </div>
    </div>
  );
}
