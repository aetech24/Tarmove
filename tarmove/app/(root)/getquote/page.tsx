import React from "react";
import { GetQuoteBanner } from "@/app/components/GetQuoteBanner";
import { GetQuoteForm } from "@/app/components/GetQuoteForm";
const GetQuote = () => {
  return (
    <div className="hero bg-inherit min-h-screen flex justify-center items-center flex-col">
      <GetQuoteBanner />
      <div>
        <GetQuoteForm />
      </div>
    </div>
  );
};

export default GetQuote;
