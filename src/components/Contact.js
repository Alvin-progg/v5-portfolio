export default function Contacts() {
  return (
    <section id="contact" className="">
      <div
        data-aos="fade-ups"
        data-aos-duration="500"
        className="flex flex-col gap-4 items-center text-center"
      >
        <p className="font-semibold text-indigo-600 text-lg tracking-wide">
          Get in Touch
        </p>
        <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
      </div>

      <div data-aos="fade-ups"
        data-aos-duration="500" className="flex gap-30   my-30 justify-center ">
        <div className="flex w-[600px] flex-col gap-8">
          <div>
            <h2 className="text-3xl text-wrap tracking-wide ">
              <span className="text-primary-700">
                I enjoy discussing new projects challenges
              </span>
              . Please share as much info, as possible so i can get the most out
              of our first catch-up.
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="tracking-wide text-2xl">Living In:</h3>
              <p className="text-xl font-light"> Batangas , The Philippines</p>
            </div>
            <div>
              <h3 className="tracking-wider text-2xl">Call Me: </h3>
              <p className="text-xl font-light">(+63) 9626361561</p>
            </div>
          </div>
        </div>
        <form className="w-[500px] flex flex-col gap-9">
          <div className="relative z-0">
            <input
              type="text"
              id="floating_standard"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative z-0">
            <input
              type="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floatin_email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>
          <div className="relative z-0">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-secondary-600"
            >
              Message:
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-secondary-300 bg-secondary-100"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="   ">
            <button
              className="text-xl relative transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group font-bold cursor-pointer px-4 py-3 max-md:text-2xl max-md:px-3 max-md:py-2 bg-secondary-800 hover:bg-primary-800 text-secondary-200 rounded-xl overflow-hidden"
              aria-label="send message"
            >
              <span className="relative z-10 flex items-center gap-2 ">
                Submit
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600  transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-xl"></div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
