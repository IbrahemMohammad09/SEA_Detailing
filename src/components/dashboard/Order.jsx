import { MdOutlineDeleteSweep } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltDown } from "react-icons/fa";
import { useState , useEffect} from "react";
import SideBar from "./SideBar";
import React from "react";
import './Order.css';

function ViewOrder() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [token, setToken] = useState(null);
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Demi Wilkinson",
      email: "demi@untitledui.com",
      phone: "657-473-9783",
      description: "Service Name",
      location: "At Center",
      status: "New",
      fullDescription: "I need a service that requires extensive details and information, and this should be fully visible when expanded."
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      description: "Consultation",
      location: "At Home",
      status: "Old",
      fullDescription: "This is the full description for John Doe's order."
    },
    {
      id: 3,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      description: "Delivery Service",
      location: "At Home",
      status: "New",
      fullDescription: "Details regarding Jane Smith's order can be found here."
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike@example.com",
      phone: "555-555-5555",
      description: "Clean",
      location: "At Home",
      status: "Old",
      fullDescription: "I need to clean the house"
    },
    {
      id: 5,
      name: "Jan Johnson",
      email: "Jan@example.com",
      phone: "355-335-6655",
      description: "Clean",
      location: "At Center",
      status: "Old",
      fullDescription: "I need to clean the car"
    },
    {
      id: 6,
      name: "Mark Johnson",
      email: "Mark@example.com",
      phone: "955-766-5855",
      description: "Clean",
      location: "At Home",
      status: "New",
      fullDescription: "I need to clean the house"
    }
  ]);

  useEffect(() => {
    // وضع رابط الباك ايند
    const ws = new WebSocket("BackendURL");

    ws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.token) {
          setToken(data.token);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message", error);
      }
    };

    ws.onerror = (error) => {
      console.error("WebSocket error", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, []);


  const toggleExpand = (id) => {
    setExpandedRow(expandedRow === id ? null : id); 
  };

  const toggleStatus = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id
          ? { ...order, status: order.status === "New" ? "Old" : "New" }
          : order
      )
    );
  };

  return (
    <div className="md:flex h-screen gap-14">
      <SideBar />
      <div className="p-6 sm:p-10 flex-1 space-y-10">
        <p className="font-bold text-3xl text-[#1A78F2] font-source">Dashboard</p>
        <p className="font-bold text-2xl text-[#1A78F2] font-source">Order</p>
        <div className="overflow-x-auto">
          <table className="w-full shadow-md rounded-lg overflow-hidden">
            <thead className="hidden md:table-header-group">
              <tr className="bg-gray-200 text-gray-700 text-left font-source">
                <th className="py-5  px-6">Name</th>
                <th className="py-5  px-6">Email Address</th>
                <th className="py-5 px-6">Phone</th>
                <th className="py-5 px-6">Description</th>
                <th className="py-5  px-6">Location</th>
                <th className="py-5 px-6 text-left  flex items-center gap-2">
                  Status <FaLongArrowAltDown className="text-base" />
                </th>
                <th className="py-5 px-6"></th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group ">
              {orders.map((order) => (
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
                  
                    {order.description}
                    
                  </td>
                   
                  {expandedRow === order.id && (
                    <tr className="expanded-row ">
                      <td colSpan="7" className="p-6 text-gray-700 font-source fulldesecription">
                        <th className="p-6 font-source  mr-1.5">Full Description</th>
                        <p >{order.fullDescription}</p>
                      </td>
                    </tr>
                  )}
                  

                  <td className="p-6 cursor-pointer  truncate flex md:table-cell" data-label="Location">{order.location}</td>
                  <td className="p-6 cursor-pointer flex md:table-cell" data-label="Status" onClick={() => toggleStatus(order.id)}>
                    <div className="flex items-center space-x-2">
                      {order.status === "New" ? (
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center">
                          <span className="w-2 h-2 bg-green-700 rounded-full mr-2"></span>
                          New
                        </span>
                      ) : (
                        <span className="bg-[#FFEDDB] text-[#FF850B] px-3 py-1 rounded-full flex items-center">
                          <span className="w-2 h-2 bg-[#FF850B] rounded-full mr-2"></span>
                          Old
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-3 py-6 flex space-x-4 md:table-cell" data-label="Actions">
                    <MdOutlineDeleteSweep className="text-gray-500 text-2xl cursor-pointer" />
                    <FiEdit3 className="text-gray-500 text-2xl cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/*ازرار التنقل  بين الصفحات*/}
        <div className="flex justify-between font-source mt-4">
          <button className="px-4 py-2 bg-[#1A78F2] text-white rounded hover:bg-blue-700">Previous</button>
          <div className="flex gap-5 ">
            <button className="bg-[#1A78F2] text-white py-2 px-3 rounded">1</button>
            <button className="px-3 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">2</button>
            <button className="px-3 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300">3</button>
          </div>
          <button className="px-4 py-2 bg-[#1A78F2] hover:bg-blue-700 text-white rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

export default ViewOrder;
