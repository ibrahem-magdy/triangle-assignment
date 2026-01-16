import { MdErrorOutline } from "react-icons/md";

const SessionsError = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#EFF1F57A]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
            <MdErrorOutline className="text-3xl text-red-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Something Went Wrong</h3>
          <p className="text-gray-600 mb-4">
            We're having trouble loading the sessions. Please try again later.
          </p>
          {/* <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default SessionsError;
