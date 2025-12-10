import Link from "next/link";
import Head from "next/head";

const PdfViewer = () => {
  return (
    <>
      <Head>
        <title>iPayOn | privacy policy</title>
        <link rel="canonical" href="https://egenieplus/privacy-policy" />
      </Head>
      <div className="container mx-auto px-5 flex justify-center items-center h-screen">
        <iframe
          // src="/privacy-cookies-policy.pdf#toolbar=0"

          src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
            "https://d3vxdfefv6q3t6.cloudfront.net/t&c-eGeniePlus.pdf"
          )}`}
          width="100%"
          height="100%"
          className="privacy-page"
        />
      </div>
    </>
  );
};

export default PdfViewer;
