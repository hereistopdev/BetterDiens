"use client";

import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CustomSelect } from "@/components/Select";
import { CustomAlert } from "@/components/Alert";
import { RequestNotifyPropsType } from "@/utils";

const stateData: string[] = [
  "California",
  "New York",
  "Washington",
  "Texas",
  "Arizona",
];
const isSellerData: string[] = ["Yes", "No"];

export default function ComingSoon() {
  const [email, setEmail] = useState<string>("");
  const [selectedSeller, setSelectedSeller] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [loadingButton, setLoadingButton] = useState<boolean>(false);
  const [successAlertOpen, setSuccessAlertOpen] = useState<boolean>(false);
  const [failedAlertOpen, setFailedAlertOpen] = useState<boolean>(false);

  async function handleClickNotify() {
    if (!email || !selectedState || !selectedSeller) {
      alert("Please Enter your information.");
      return;
    }

    setLoadingButton(true);
    setSuccessAlertOpen(false);
    setFailedAlertOpen(false);

    const isSeller = selectedSeller === "Yes";

    const bodyData: RequestNotifyPropsType = {
      email,
      state: selectedState,
      isSeller,
    };
    console.log(bodyData);

    try {
      await axios.post(
        "https://fd30-107-155-105-218.ngrok-free.app/api/client/create",
        bodyData
      );
      setSuccessAlertOpen(true);
    } catch (error) {
      console.error(error);
      setFailedAlertOpen(true);
    } finally {
      setLoadingButton(false);
    }
  }

  return (
    <div className="relative flex w-full min-h-screen text-white">
      <div className="absolute inset-0">
        <Image
          src="/background.png"
          alt="Construction Tools"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full flex flex-col text-center px-4 sm:px-6 ">
        <div className="relative z-10 p-3">
          <div className="flex flex-col sm:flex-row justify-between align-middle">
            <div className="flex flex-row align-middle justify-center gap-5 mt-10 ml-5">
              <Image
                src="/correct-icon.png"
                alt="Title"
                width={80}
                height={50}
              />
              <Image src="/logo.png" alt="Title" width={350} height={40} />
            </div>
          </div>
          <p className="font-bold font-[family-name:var(--font-exo)] text-[48px] text-black leading-14 mt-15">
            Local independent retailers <br /> offering more than convenience
          </p>
          <div className="flex justify-center m-[20px]">
            <p className="w-[670px] text-black font-light leading-8 font-[family-name:var(--font-roboto)] text-[24px]">
              Website is coming soon. Get a chance to get{" "}
              <span className="font-bold">xaClub </span>membership (
              <span className="font-bold">$30 value</span>) free for one year,
              which offers bigger deals and early access to promotions (
              <span className="font-bold underline">first 100</span> who sign-up
              automatically win this deal).
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row md:flex-row 2xl:flex-row justify-center">
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="E-mail address.."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full h-14 sm:w-50 md:w-80 bg-white cursor-pointer
                sm:rounded-l-lg  border-gray-600 text-black font-semibold font-[family-name:var(--font-outfit)] focus:outline-none"
              />
              <div className="relative sm:w-auto mt-4 sm:m-0">
                <CustomSelect
                  placeholder="Are you a Seller"
                  selectedValue={selectedSeller}
                  setSelectedValue={setSelectedSeller}
                  optionData={isSellerData}
                  customStyle="sm:w-50"
                />
              </div>
              <div className="relative sm:w-auto mt-4 sm:m-0">
                <CustomSelect
                  placeholder="State"
                  selectedValue={selectedState}
                  setSelectedValue={setSelectedState}
                  optionData={stateData}
                />
              </div>
            </div>
            <button
              type="button"
              className={`bg-purple-600 px-5 py-2 w-full sm:w-auto sm:rounded-r-lg mt-4 sm:m-0
              font-semibold font-[family-name:var(--font-outfit)] hover:bg-purple-700 transition ${
                loadingButton ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleClickNotify}
            >
              {loadingButton ? "loading...." : "Notify Me"}
            </button>
          </div>
        </div>
      </div>
      <CustomAlert
        content="Created Successfully!"
        severity="success"
        open={successAlertOpen}
        setOpen={setSuccessAlertOpen}
      />
      <CustomAlert
        content="Internal Server Error!"
        severity="error"
        open={failedAlertOpen}
        setOpen={setFailedAlertOpen}
      />
    </div>
  );
}
