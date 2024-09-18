"use client";
import RequestMessages from "@/components/support/RequestMessages";
import SupportRequests from "@/components/support/SupportRequests";
import { useState } from "react";

interface RequestInterface {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageDate: string;
}

function page() {
  const [selectedRequest, setSelectedRequest] =
    useState<RequestInterface | null>(null);

  const handleRequestClick = (request: RequestInterface) => {
    setSelectedRequest(request);
  };
  return (
    <main className="w-full flex bg-[#ECF0FA] h-[92vh] overflow-clip">
      <SupportRequests onRequestClick={handleRequestClick} />
      <RequestMessages selectedRequest={selectedRequest} />
    </main>
  );
}

export default page;
