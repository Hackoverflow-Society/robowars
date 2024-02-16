export default function Prize(){
    return(
        <section className="h-full w-auto">
            <div className="text-white lg:px-36 p-8">
                <h1 className="lg:text-[50px] text-[25px] font-babasneue font-semibold">&gt;&gt; PRIZES</h1>
                <h1 className="lg:text-[20px] text-[15px] font-babasneue font-semibold">CONQUER THE BATTLEGROUND AND ERAN YOUR MEDALS</h1>
            </div>
            <div className="flex flex-col lg:pt-10 ">
                <div className="flex flex-col items-center">
                    <img src="public\images\1st.png" className="w-[12vw]" alt="" />
                    <h1 className="text-white lg:text-[30px] text-center font-babasneue font-semibold">
                        1ST PRIZE
                    </h1>
                    <h1 className="text-[#FF431A] lg:text-[40px] text-center font-babasneue font-[400] ">
                        &#8377;XX,XXX
                    </h1>
                </div>
                <div className="flex justify-center lg:gap-x-[40rem] md:gap-60 gap-28 -translate-y-[25%]">
                    <div className="flex flex-col items-center ">
                        <img src="public\images\3rd.png" className="w-[12vw]" alt="" />
                        <h1 className="text-white lg:text-[30px] text-center font-babasneue font-semibold">
                            3RD PRIZE
                        </h1>
                        <h1 className="text-[#FF431A] lg:text-[40px] text-center font-babasneue font-[400]">
                            &#8377;XX,XXX
                        </h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="public\images\2nd.png" className="w-[15vw]" alt="" />
                        <h1 className="text-white lg:text-[30px] text-center font-babasneue font-semibold">
                            2ND PRIZE
                        </h1>
                        <h1 className="text-[#FF431A] lg:text-[40px] text-center font-babasneue font-[400]">
                            &#8377;XX,XXX
                        </h1>
                    </div>
                </div>
            </div>
        </section>
        
    );
}