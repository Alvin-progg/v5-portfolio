export default function About(){
    return(
        <section className="w-full h-auto  ">
            <div className="flex flex-col items-center justify-center my-10  ">
                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="font-semibold text-primary-700 text-base ">Know me More</p>
                    <h2 className="text-3xl font-bold">ABOUT ME</h2>
                </div>
                <div className="flex gap-4 text-wrap  my-20 py-6">
                    <div className="w-[650px] flex flex-col gap-10">
                        <h3 className="text-4xl font-semibold leading-15">Hi, I&apos;m <span className="text-primary-700 ">Alvin Aloya</span> — A Web Developer with Creative Expertise & Years of Experience.</h3>
                        <p className="text-2xl">“Delivering work within time and budget which meets client&apos;s requirements is my moto.”</p>
                    </div>
                    <div className="w-[650px] text-2xl ">
                        <p className="text-secondary-900 font-light tracking-wider leading-loose">
                            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                </div>
            </div>
            
        </section>
    );
}