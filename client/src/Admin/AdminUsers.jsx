import React, { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_BASE_URL } from '../config/config';
import { FaEllipsisVertical } from "react-icons/fa6";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [activeIndex,SetActiveIndex] = useState(null);
  const [show,setShow] = useState(false)
  const fetchUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/users/allUsers`);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`${API_BASE_URL}/api/users/${id}`)
      .then((response) => {
        toast.info('User Deleted successfully!');
        fetchUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const removeAsAdmin=(userId)=>{

  }
  return (
    <AdminLayout>
      <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Manage Users</h2>
        <div className='mb-8'>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-2 md:px-4 border-b border-gray-200 text-left">Name</th>
                <th className="py-2 px-2 md:px-4 border-b border-gray-200 text-left">Email</th>
                <th className="py-2 px-2 md:px-4 border-b border-gray-200 text-left">Role</th>
                <th className="py-2 px-2 md:px-4 border-b border-gray-200 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="py-2 px-2 md:px-4 border-b border-gray-200">{user.username}</td>
                  <td className="py-2 px-2 md:px-4 border-b border-gray-200">{user.email}</td>
                  <td className="py-2 px-2 md:px-4 border-b border-gray-200">{user.role}</td>
                  <td className="py-2 px-2 md:px-4 border-b border-gray-200 text-center">
                    {user.role === 'admin' ? (
                      <div className='relative flex justify-center items-center '>
                      <FaEllipsisVertical onClick={() => {setShow(!show); SetActiveIndex(user._id);}} size={18} className='cursor-pointer'/>
                      {
                        show &&  activeIndex === user._id &&  <div className='absolute -left-10 top-2 flex flex-col p-2  border rounded-md text-sm border-black '>
                        <button onClick= {(activeIndex)=>removeAsAdmin()} className= "text-black">Remove as Admin</button>
                        <button className='text-red-500'>Delete</button>
                        </div>
                      }
                        </div>
                    ) : (
                      <div className='relative flex justify-center items-center '>
                      <FaEllipsisVertical onClick={() => {setShow(!show); SetActiveIndex(user._id);}} size={18} className='cursor-pointer'/>
                      {
                        show &&  activeIndex === user._id &&  <div className='absolute -left-10 top-2 flex flex-col p-2  border rounded-md text-sm border-black'>
                        <button onClick= {(activeIndex)=>removeAsAdmin()} className= "">Make Admin</button>
                         <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-500 hover:text-red-700 font-semibold text-xs md:text-sm"
                      >
                        Delete
                      </button>
                        </div>
                      }
                        </div>
                     
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
