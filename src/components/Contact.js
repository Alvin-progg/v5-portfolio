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

      <div className="flex gap-30 mx-66">
        <div>
          <div>
            <h2 className="text-3xl text-wrap">
              I enjoy discussing new projects challenges. Please share as much
              info, as possible so i can get the most out of our first catch-up.
            </h2>
          </div>
          <div>
            <div>
              <h3>Living In:</h3>
              <p>Solo , Mabini , Batangas</p>
            </div>
            <div>
              <h3>Call Me</h3>
              <p>(+63) 9626361561</p>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
}
