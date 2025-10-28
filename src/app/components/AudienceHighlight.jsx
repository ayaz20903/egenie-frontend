"use client";

import Image from "next/image";
import multilingual from "../../../public/multilingual.png";

export default function AudienceHighlight() {
  return (
    <div className="w-full  mx-auto  bg-white left-right-content  ">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 pb-30 px-6">
        <div className="animated-gradient-border rounded-3xl">
          <div className="animated-gradient-inner bg-[#161725] rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Your Knowledge, eGenie’s Power
            </h2>
            <p className="text-white mb-8 max-w-md">
              Feed eGenie your content from FAQs to documents and it learns to
              answer with your brand’s own voice and expertise.
            </p>

            <Image src={multilingual} alt="Genie" className="" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="animated-gradient-border rounded-3xl">
          <div className="animated-gradient-inner bg-[#161725] rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
              Multi-Language Support
            </h2>
            <p className="text-white mb-8 max-w-md">
              eGenie understands your visitors no matter where they’re from. It
              detects their language and responds like a local.
            </p>
            <Image src={multilingual} alt="Genie" className="" />
          </div>
        </div>
      </div>
      {/* LEFT CARD */}
    </div>
  );
}
