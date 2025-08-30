export default function About(){
    return(
        <section className="w-full h-auto overflow-hidden  ">
            <div className="flex flex-col items-center justify-center my-10  ">
                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="font-semibold text-primary-700 text-base ">Know me More</p>
                    <h2 className="text-3xl font-bold">ABOUT ME</h2>
                </div>
                <div className="flex gap-4   my-20 py-6  max-lg:flex-col ">
                    <div className="w-[650px] max-md:w-auto  max-md:text-center flex flex-col gap-10 text-wrap">
                        <h3 className="text-4xl font-semibold leading-15">Hi, I&apos;m <span className="text-primary-700 ">Alvin Aloya</span> — A Web Developer <span className="text-secondary-500">with Creative Expertise & Years of Experience.</span></h3>
                        <p className="text-2xl">“Delivering work within time and budget which meets client&apos;s requirements is my moto.”</p>
                    </div>
                    <div className="w-[650px] text-2xl text-wrap max-md:w-auto items-center max-md:mx-8 max-sm:my-3 max-sm:text-xl max-md:text-center ">
                        <p className="text-secondary-900 font-light tracking-wider leading-loose">
                            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </div>
            
        </section>
    );
}