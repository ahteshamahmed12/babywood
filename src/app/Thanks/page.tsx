
import Head from 'next/head';
import Link from 'next/link';
const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You</title>
        <meta name="description" content="Thank you for your submission!" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-[#24224f]">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your submission has been received. We appreciate your effort!
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
