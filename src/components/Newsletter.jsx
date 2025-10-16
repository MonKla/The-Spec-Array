// src/components/Newsletter.jsx

function Newsletter() {
  return (
    <section className="bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Join Our Club, Get 15% Off For Your Birthday
        </h2>

        <form className="mt-6 flex max-w-md mx-auto">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            autoComplete="email"
            required
            className="w-full min-w-0 appearance-none rounded-l-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            placeholder="Enter Your Email Address"
          />
          <button
            type="submit"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-r-md bg-black px-4 py-2 text-base font-medium text-white hover:bg-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </form>

        <div className="mt-4 flex items-center justify-center">
          <input
            id="terms-and-privacy"
            name="terms-and-privacy"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
          />
          <label htmlFor="terms-and-privacy" className="ml-2 block text-sm text-gray-900">
            By submitting your email, you agree to receive advertising emails from Modimal.
          </label>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;