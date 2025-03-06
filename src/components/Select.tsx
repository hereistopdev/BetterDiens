import Image from "next/image";
import { CustomSelectPropsType } from "@/utils"

export function CustomSelect({ placeholder, selectedValue, setSelectedValue, optionData, customStyle }: CustomSelectPropsType) {

  return (
    <div className="relative">
      <select
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
        }}
        className={`px-4 py-2 w-full sm:w-32 h-14 bg-white shadow-lg 
                  font-bold font-[family-name:var(--font-outfit)] pr-10 appearance-none 
                  ${!selectedValue ? "text-gray-400" : "text-black"} ${customStyle && customStyle}`}
      >
        <option value="" className="text-gray-400">{placeholder}</option>
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
          width={14}
          height={8}
          className="transition-transform duration-200"
        />
      </div>
    </div>
  );
}