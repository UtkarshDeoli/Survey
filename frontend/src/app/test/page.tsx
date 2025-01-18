"use client";

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import axios from "axios";
import React, { useState } from "react";

function Page() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async (id: string) => {
    try {
      setLoading(true);

      // Send the request to the backend for PDF download (Base64)
      const response = await axios.get(
        `http://localhost:6969/api/response/downloadVoter?id=${id}`
      );

      console.log("response ----------->", response);

      if (response.status === 200 && response.data.success) {
        const { file, filename } = response.data;

        // Decode the Base64 string to binary data
        const pdfData = atob(file); // Decode Base64 string

        // Create a Blob from the decoded data
        const byteArray = new Uint8Array(pdfData.length);
        for (let i = 0; i < pdfData.length; i++) {
          byteArray[i] = pdfData.charCodeAt(i);
        }

        const blob = new Blob([byteArray], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);

        // Create a temporary <a> element and simulate a click to download the file
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // Set the filename dynamically
        document.body.appendChild(link);
        link.click();

        // Clean up resources
        link.parentNode?.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("Failed to fetch the file");
      }
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }

    setLoading(false);
  };

  return (
    <div>
      page
      <ButtonFilled
        loading={loading}
        onClick={() => handleDownload("676d308f3cf9182f4f9a65b7")}
      >
        Download
      </ButtonFilled>
    </div>
  );
}

export default Page;
