import  SideBar from "../dashboard/SideBar"
export default function Order(){
    return<>
      <div className=" md:flex  gap-14" >
          <SideBar/>
       <div className="flex justify-center mt-12  gap-12  mx-3.5">
        <form>
            {/* Name & Email */}
            <div className="flex flex-col md:flex-row gap-8 mb-5 ">
                 <div className="w-full ">
                   <label className="font-source text-xl font-medium text-[#1A78F2]">Your Name</label>
                   <input type="text" placeholder="Name" className="w-full md:max-w-[341px] mt-1  block shadow-lg font-light text-lg bg-white border  border-[#1A78F2] rounded-lg p-3 h-14 font-source focus:outline-none focus:ring-2 focus:ring-[#1A78F2] "/>
                </div>
                <div className="w-full">
                    <label className="font-source text-xl font-medium  text-[#1A78F2] ">Your Email</label>
                    <input type="email" placeholder="Example@Example.com"  className="w-full md:max-w-[341px] mt-1
                      block shadow-lg font-light text-lg bg-white border  border-[#1A78F2] rounded-lg p-3 h-14 font-source focus:outline-none focus:ring-2 focus:ring-[#1A78F2]  "/>
                </div>
            </div>
            {/* Phone & Status */}
           <div className="flex flex-col md:flex-row gap-8 mb-5">
            <div className="w-full ">
               <label className="font-source text-xl font-medium  text-[#1A78F2]">Your phone</label>
               <input type="text" placeholder="+0017530868"  className=" font-light text-lg w-full md:max-w-[341px] mt-1  block shadow-lg  bg-white border  border-[#1A78F2] rounded-lg p-3 h-14 font-source focus:outline-none focus:ring-2 focus:ring-[#1A78F2]  "/>
            </div>
            <div className="w-full">
                 <label htmlFor="statusType" className="font-medium text-xl font-source  text-[#1A78F2] ">Select Your Status Type</label>
                 <select 
                  className="w-full md:max-w-[341px] text-[#949494] font-source  font-light text-xl mt-1 block  bg-white border border-[#1A78F2] rounded-lg p-3 h-14 focus:outline-none focus:ring-2 focus:ring-[#1A78F2] ">
                  <option value="restaurants">New</option>
                  <option value="hotels">Old</option>
                </select>
            </div>
            </div> 
            {/* Location  */}
            <div className="w-full">
                 <label htmlFor="loctation" className="font-medium text-xl font-source  text-[#1A78F2]">Select Location</label>
                <select 
                className="w-full text-[#949494] font-source font-light mt-1 block text-xl bg-white border border-[#1A78F2] rounded-lg p-3 h-14 focus:outline-none focus:ring-2 focus:ring-[#1A78F2] ">
                <option value="restaurants">At Center</option>
                <option value="hotels">At Home</option>
                </select>
            </div>
             {/* Description  */}
            <div className="mt-10">
                <label className="font-medium text-xl text-[#1A78F2] font-source ">Description (Optional)</label>
                <textarea
               placeholder="Please provide us with details about the service you want."
               className="bg-white border border-[#1A78F2] rounded-lg h-40 p-3 w-full font-light text-lg font-source focus:outline-none focus:ring-2 focus:ring-[#1A78F2] "/>
            </div>
            <button 
               type="submit" 
                className="boder-3 w-[290px] bg-[#1A78F2] text-white font-semibold text-3xl border-3 border-[#1A78F2] rounded-2xl py-4 px-6  hover:bg-blue-700 my-10 " >
                Book Now
            </button>
        </form>
       </div>
       </div>
    
    </>
}