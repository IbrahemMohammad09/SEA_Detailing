import { useState,useEffect } from "react";
import SideBar from "./SideBar";
import { Api } from "../../constant/Api";
import axios from "axios";
import { useNavigate } from "react-router";


export default function Portfolio() {
  const [images , setImages] = useState([])

  const [addImage, setaddImage] = useState(null);

  const navigate = useNavigate()

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const response = await axios.get(Api.GET.PICTURELIST);
        setImages(response.data.data.reverse())
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    fetchData();
  },[])

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5 ميغا بايت
        alert("حجم الصورة كبير جدًا! يُرجى تحميل صورة أصغر من 5 ميجابايت.");
        return;
      }
      setaddImage(file);
    }
  };

  const uplaodImage = async () =>{
    if (!addImage) {
      alert("الرجاء اختيار الصورة أولا!");
      return;
    }
    const formData = new FormData();
    formData.append("picture_title", "Portfolio Picture"); 
    formData.append("image", addImage);

    try{
      const response = await axios.post(Api.POST.CREATEPICTURE,
        formData,
        {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });
      alert("تم التحميل بنجاح");
      window.location.reload();
    } catch{
      alert("فشل تحميل الصورة");
      console.error("Error uploading image:", error.response ? error.response.data : error.message);
    }
  }
  
  const deletePicture = async (id) =>{
    const confirmDelete = window.confirm(`هل أنت متأكد أنك تريد حذف هذه الصورة؟`);

    if(confirmDelete){
      try{
        const response = await axios.delete(Api.DELETE(id).DELETEPICTURE)
        alert(`لقد تم حذف الصورة`);
        window.location.reload();
      } catch{}
    }

  }

  return (
    <>
      <div className="md:flex gap-14">
        <SideBar />
        <div className="font-source mx-3">
        <p className="font-bold text-3xl text-[#1A78F2]  mt-12 ">لوحة التحكم</p>
        <p className="font-bold text-2xl text-[#1A78F2]  my-12">معرض الصور</p>

          <div>
            <p className="text-2xl text-gray-500 mb-3">أضف الصورة هنا</p>
            <label className="cursor-pointer border-dashed border-2 rounded-lg max-w-[300px] border-gray-400 p-16 w-full flex items-center justify-center">
              {addImage ? (
                <a href="#" className="block">
                  <img
                    // src={addImage}
                    src={URL.createObjectURL(addImage)}
                    alt="photo-portfolio"
                    className="w-full h-full object-cover"
                  />
                </a>
              ) : (
                <span className="text-gray-500 text-xl ">أرفع الصورة</span>
              )}
              <input
                type="file"
                className="hidden"
                onChange={(e) => handleImageChange(e, setaddImage)}
              />
            </label>
          </div>
          <button onClick={uplaodImage} className="px-8 py-4 text-2xl font-medium  bg-[#1A78F2] text-white rounded-lg  hover:bg-[#EAEEF3] hover:text-[#1A78F2] mt-6">
            رفع الصورة
            </button>
            <hr className="mt-7 text-gray-400"></hr>

            <div className="flex flex-col justify-center items-center mt-10">
              <div className="grid grid-cols-1 gap-7 mb-9 xl:grid-cols-3 sm:grid-cols-2">
                {images.map((image, index) => (
                  <div className="mb-3" key={index}>
                    <img src={image.image} className="w-full h-[250px] rounded-xl object-cover" alt="photo-portfolio" />
                    <button onClick={()=>deletePicture(image.id)} className="px-4 py-2 bg-[#1A78F2] font-medium text-2xl text-white rounded-lg hover:bg-[#EAEEF3] hover:text-[#1A78F2] mt-6 font-source">
                      حذف الصورة
                    </button>
                  </div>
                ))}
              </div>
            </div>


        </div>
      </div>
    </>
  );
}
