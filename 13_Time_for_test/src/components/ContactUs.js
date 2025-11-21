export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center py-10">

      <h1 className="p-4 font-bold text-3xl">Contact Us</h1>

      <form className="flex flex-col w-full max-w-md px-5">

        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 my-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Message"
          rows="4"
          className="w-full px-4 my-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          className="mt-4 bg-black text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition-all"
        >
          Submit
        </button>

      </form>
    </div>
  );
}