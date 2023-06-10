import React from 'react';
import { Link } from 'react-router-dom';

const MyAllProduct = ({ ctg, cng }) => {

    const handleDelete = id => {
        if (confirm("Are you really want to delete this product")) {
            fetch(`https://game-on-new-server.vercel.app/addList/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        cng(1)
                        alert("deleted")
                    }
                })
        }
        else {
            return
        }
    }

    return (
        <div>
            <ol
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="700"
                className='grid grid-cols-7 gap-3 mt-5 bg-orange-200 text-black text-sm px-10 py-3 text-center rounded-full'>
                <p>{ctg?.sellerName}</p>
                <p>{ctg?.name}</p>
                <p>{ctg?.category}</p>
                <p>{ctg?.price}</p>
                <p>{ctg?.quantity}</p>
                <div className='flex justify-center'>
                    <Link to={`/update/${ctg?._id}`} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Update</Link>
                </div>
                <div className='flex justify-center'>
                    <p onClick={() => handleDelete(ctg?._id)} className='btn btn-sm w-20 rounded-full normal-case'>Delete</p>
                </div>
            </ol>
        </div>
    );
};

export default MyAllProduct;