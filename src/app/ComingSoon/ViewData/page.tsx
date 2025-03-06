"use client";
import React, { useState, useEffect } from "react";
import CustomTable from "@/components/Table";
import Image from "next/image";
import axios from "axios";
import { CustomTableDataType } from "@/utils";

export default function ViewDataPage() {
  const [data, setData] = useState<CustomTableDataType[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    async function getData() {
      setLoadingData(true);
      try {
        const responseData = await axios.get(
          "https://fd30-107-155-105-218.ngrok-free.app/api/client",
          {
            headers: {
              "ngrok-skip-browser-warning": "true"
            }
          }
        );
        console.log(responseData.data);
        setData(responseData.data);
      } catch (error) {
        console.error("Error fecthing data:", error);
        alert("Internal Server Error");
        setLoadingData(false);
      } finally {
        setLoadingData(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="bg-white w-full h-screen p-10">
      <Image src="/company-logo.png" alt="company-logo" width={200} height={40} />
      <div className="w-full">
        <CustomTable tableData={data} loadingStatus={loadingData} />
      </div>
    </div>
  )
}
