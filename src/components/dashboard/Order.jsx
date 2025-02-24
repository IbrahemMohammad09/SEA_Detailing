import { MdOutlineDeleteSweep } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useState , useEffect} from "react";
import SideBar from "./SideBar";
import React from "react";
import './Order.css';
import axios from "axios";
import { Api } from "../../constant/Api";


function ViewOrder() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [token, setToken] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [orders , setOrders] = useState([]);
  const itemsPerPage = 6;
  

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const response = await axios.get(Api.GET.ORDERLIST);
        console.log(response.data.data.reverse());
        const data = response.data.data.reverse();
        setOrders(response.data.data.reverse())
      } catch{}
    }

    fetchData();
  },[])

  // useEffect(() => {
  //   // وضع رابط الباك ايند
  //   const ws = new WebSocket("BackendURL");

  //   ws.onopen = () => {
  //     console.log("WebSocket connection opened");
  //   };

  //   ws.onmessage = (event) => {
  //     try {
  //       const data = JSON.parse(event.data);
  //       if (data.token) {
  //         setToken(data.token);
  //       }
  //     } catch (error) {
  //       console.error("Error parsing WebSocket message", error);
  //     }
  //   };

  //   ws.onerror = (error) => {
  //     console.error("WebSocket error", error);
  //   };

  //   ws.onclose = () => {
  //     console.log("WebSocket connection closed");
  //   };

  //   return () => {
  //     ws.close();
  //   };
  // }, []);


  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id); 
  };

  const toggleStatus = async (id,status) => {

    try{
      const newStatus = status === "new" ? "finished" : "new";

      const response = await axios.put(Api.PUT(id).UPDATEORDER,{
        status : newStatus
      },{ headers: { "Content-Type": "application/json" } })
      window.location.reload();
    } catch(error){
      console.log(error)
    }

  };

  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm(`هل أنت متأكد أنك تريد حذف هذا الطلب؟`);
  
    if (confirmDelete) {
      try {
        const response = await axios.delete(Api.DELETE(id).DELETEORDER);
        alert(`لقد تم حذف الطلب`);
        window.location.reload(); // إعادة تحميل الصفحة بعد الحذف
      } catch (error) {
        console.log(error); // تسجيل الخطأ في وحدة التحكم
      }
    }
  };
  


  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="md:flex h-screen gap-14">
      <SideBar />
      <div className="p-6 sm:p-10 flex-1 space-y-10">
        <p className="font-bold text-3xl text-[#1A78F2] font-source">لوحة التحكم</p>
        <p className="font-bold text-2xl text-[#1A78F2] font-source">الطلبات</p>
        <div className="overflow-x-auto">
          <table className="w-full shadow-md rounded-lg overflow-hidden">
            <thead className="hidden lg:table-header-group">
              <tr className="bg-gray-200 text-gray-700 text-left font-source">
                <th className="py-5  px-6">اسم الزبون</th>
                <th className="py-5  px-6">عنوان البريد الإلكتروني</th>
                <th className="py-5 px-6">رقم الهاتف</th>
                <th className="py-5 px-6">وصف الطلب</th>
                <th className="py-5  px-6">المكان</th>
                <th className="py-5  px-6">العنوان</th>
                <th className="py-5 px-6 text-left  flex items-center gap-2">
                  حالة الطلب <FaLongArrowAltDown className="text-base" />
                </th>
                <th className="py-5 px-6"></th>
              </tr>
            </thead>
            <tbody className="block lg:table-row-group ">
              {currentOrders.map((order) => (
                <tr key={order.id} className="block md:table-row border-b bg-white shadow-md md:shadow-none md:bg-transparent mb-4 md:mb-0">
                  <td className="p-6 font-bold flex md:table-cell" data-label="Name">
                    {order.name}
                    {token && (
                        <span className="ml-2 inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                      )}
                    </td>
                  <td className="p-6 font-source flex md:table-cell" data-label="Email">{order.email}</td>
                  <td className="p-6 font-source flex md:table-cell" data-label="Phone">{order.phone}</td>
                  <td 
                    className="p-6 font-source cursor-pointer flex md:table-cell " 
                    data-label="Description" 
                    onClick={() => toggleExpand(order.id)}
                  >
                    {"انقر هنا لعرض تفاصيل الطلب"}
                    {expandedRow === order.id && (
                      <div className="expanded-row p-6 text-gray-700 font-source fulldesecription">
                        <p>{order.message}</p>
                      </div>
                    )}
                  </td>
                  <td className="p-6 cursor-pointer  truncate flex lg:table-cell" data-label="Location">{order.type}</td>
                  <td className="p-6 cursor-pointer  truncate flex lg:table-cell" data-label="Location">{order.address}</td>
                  <td className="p-6 cursor-pointer flex lg:table-cell" data-label="Status" onClick={() => toggleStatus(order.id,order.status)}>
                    <div className="flex items-center space-x-2">
                      {order.status === "new" ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                          <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                          جديد
                        </span>
                      ) : (
                        <span className="bg-[#FFEDDB] text-[#FF850B] px-3 py-1 rounded-full flex items-center">
                          <span className="w-2 h-2 bg-[#FF850B] rounded-full mr-2"></span>
                          مكتمل
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-3 py-6 flex space-x-4 lg:table-cell" data-label="Actions">
                    <MdOutlineDeleteSweep onClick={()=>deleteOrder(order.id)} className="text-gray-500 text-2xl cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*ازرار التنقل  بين الصفحات*/}
        <div className="flex justify-between font-source mt-4">
          <button  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} className="px-4 py-2 bg-[#1A78F2] text-white rounded hover:bg-blue-700">السابق</button>
          <div className="flex gap-5 ">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`px-3 py-2 rounded ${currentPage === index + 1 ? "bg-[#1A78F2] text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button 
            className="px-4 py-2 bg-[#1A78F2] hover:bg-blue-700 text-white rounded"
            onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          >
            التالي</button>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
