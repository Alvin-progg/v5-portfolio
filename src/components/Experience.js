export default function Experience(){
    return(
        <section id="experience" className="w-full ">
            <div className="flex flex-col  mt-20 m-2">
                <div className="flex flex-col gap-3 items-center">
                    <p className="font-semibold text-primary-700 text-base">My Career</p>
                    <h2 className="text-3xl font-bold">Experience</h2>
                </div>
                <div className="flex  flex-col my-20 py-10 items-center text-wrap mx-10">
                    <div className="w-[900px] max-lg:w-auto flex flex-col gap-3.5 border-b py-5 border-secondary-300">
                        <h3 className="text-3xl font-bold">Front-End Developer</h3>
                        <div className="flex justify-between text-2xl font-semibold text-secondary-600">
                            <p>WeTech Dev ( Remote )</p>
                            <p>(2025 - Present )</p>
                        </div>
                        <p className="text-xl tracking-wider font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lisque persius interesset his et ad mea essent possim iriure.</p>
                    </div>
                    <div className="w-[900px] max-lg:w-auto flex flex-col gap-3.5 border-b py-5 border-secondary-300">
                        <h3 className="text-3xl font-bold">Technical Support</h3>
                        <div className="flex justify-between text-2xl font-semibold text-secondary-600">
                            <p>Batstate-u </p>
                            <p>(2024 - Present )</p>
                        </div>
                        <p className="text-xl tracking-wider font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lisque persius interesset his et ad mea essent possim iriure.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-3 items-center">
                    <p className="font-semibold text-primary-700 text-base">Expertise</p>
                    <h2 className="text-3xl font-bold">Tech Stack</h2>
                </div>
            </div>
            
        </section>
    );
}