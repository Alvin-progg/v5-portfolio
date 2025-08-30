"use client"
import CountUp from 'react-countup';

export default function About(){
    return(
        <section id="about" className="w-full h-auto overflow-hidden  ">
            <div className="flex flex-col items-center justify-center my-10  ">
                <div className="flex flex-col items-center justify-center gap-3">
                    <p className="font-semibold text-primary-700 text-base ">Know me More</p>
                    <h2 className="text-3xl font-bold">ABOUT ME</h2>
                </div>
                <div className="flex gap-4   my-10 py-6  max-lg:flex-col  ">
                    <div className="w-[650px] max-md:w-auto max-xl:w-[500px] max-md:text-center flex flex-col gap-10 text-wrap ">
                        <h3 className="text-4xl font-semibold leading-15 max-xl:text-3xl max-lg:text-center">Hi, I&apos;m <span className="text-primary-700 ">Alvin Aloya</span> — A Web Developer <span className="text-secondary-500">with Creative Expertise & Years of Experience.</span></h3>
                        <p className="text-2xl max-xl:text-xl max-lg:text-center font-light ">“Delivering work within time and budget which meets client&apos;s requirements is my moto.”</p>
                    </div>
                    <div className="w-[650px] text-2xl max-xl:w-[500px] text-wrap max-md:w-auto items-center max-md:mx-8 max-sm:my-3 max-sm:text-xl max-md:text-center max-xl:text-xl max-lg:text-center  ">
                        <p className="text-secondary-900 font-light tracking-wider leading-loose">
                            I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-4 grid-rows-1 max-sm:grid-cols-1 max-lg:grid-cols-2 max-lg:grid-rows-2 gap-10 max-xl:gap-6 justify-between items-center font-bold '>
                    <div className='flex flex-col items-center text-primary-800' >
                        <div className='flex text-3xl text-center '>
                            <CountUp  end={8} duration={2} enableScrollSpy={true} scrollSpyDelay={50}/>
                            <p>+ </p>
                        </div>
                        <p className='text-xl font-semibold'>Hour&apos;s Coding A day</p>
                    </div>
                    <div className='flex flex-col items-center text-primary-800' >
                        <div className='flex text-3xl text-center'>
                            <CountUp  end={300} duration={1} enableScrollSpy={true} scrollSpyDelay={50}/>
                            <p>k+ </p>
                        </div>
                        <p className='text-xl font-semibold'>Line&apos;s of code written</p>
                    </div>
                    <div className='flex flex-col items-center text-primary-800' >
                        <div className='flex text-3xl text-center '>
                            <CountUp  end={2} duration={4} enableScrollSpy={true} scrollSpyDelay={50}/>
                            <p>k+ </p>
                        </div>
                        <p className='text-xl font-semibold'>Cup&apos;s of Coffe Consumed</p>
                    </div>
                    <div className='flex flex-col items-center text-primary-800' >
                        <div className='flex text-3xl '>
                            <CountUp  end={10} duration={1} enableScrollSpy={true} scrollSpyDelay={50}/>
                            <p>+ </p>
                        </div>
                        <p className='text-xl font-semibold text-center'>Happy clients</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}