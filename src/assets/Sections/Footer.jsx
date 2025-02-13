import './Footer.css'
export default function Footer(){
    return<>
    <div className="flex flex-col lg:flex-row gap-8 px-16 justify-between mt-20 container-footer">
        <div className="flex flex-col gap-2 cursor-pointer">
            <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2">SEA DETALIING</p>
            <a href = "#" className= "font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]" >Home</a>
            <a href = "#" className= "font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]" >About Us</a>
            <a href = "#" className= "font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]" > Our Services</a>
            <a href = "#" className= "font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]" > Why Choose Us</a>
            <a href = "#" className= "font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]" > Contact Us</a>
        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
            <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2 ">CAR SERVICES</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2] ">Headlight Polishing</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]">Car Polish & Wax</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2] ">Wheel Changing</p>

        </div>
        <div className="flex flex-col gap-2 cursor-pointer">
            <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2 "> HOUSESERVICES</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2]">House Cleaning& Tidying</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2] ">Sofa Cleaning</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2] ">Mattress Cleaning</p>
            <p className=" font-normal text-base text-[#585A5B] font-lora letter-spacing-2 hover:text-[#1A78F2] ">Carpet Cleaning</p>
        </div>  
        <div className="flex flex-col gap-2 cursor-pointer " >
            <p className="font-semibold text-xl font-source text-[#343536] letter-spacing-2 "> BOOK YOUR SERVICE</p>
            <p className=" font-normal text-base text-[#585A5B] max-w-[310px] letter-spacing-2 font-lora">Get best dedicated team of professionals for your service.</p>
            <button className="text-white font-normal md:font-semibold text-base letter-spacing-8 bg-[#1A78F2] rounded-4xl w-[193px] py-3.5 px-7 font-lora  my-4 hover:shadow-xl hover:border hover:border-[#1A78F2] hover:bg-white hover:text-[#1A78F2]">
              BOOK SERVICE</button>
            <a href ='tel:647-673-9380/ 647-273-0008' target="_blank" className="font-source text-base md:text-2xl  font-light text-[#343536] letter-spacing-2 "> 
               <span className="font-bold">Call us:</span> 647-673-9380/ 647-273-0008</a>

        </div>
        </div>
    <div className="bg-[#F6F6F6] py-8 mt-24 font-nunito">
          <p className="text-black font-normal text-base text-center ">
            © Copyright by{" "}
            <a
              className=""
              style={{ color: "#2fb0cd" }}
              target="_blank"
              href="https://sparkengdev.com/"
            >
              SPARK
            </a>{" "}
            – All rights reserved.
          </p>
        </div>
           
    </>
}