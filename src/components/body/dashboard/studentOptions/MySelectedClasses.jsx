import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../../../provider/DataProvider';
import { AuthContext } from '../../../../provider/AuthProvider';

const MySelectedClasses = () => {
    const { selected, reCallSelect, setReCallSelect } = useContext(DataContext);
    const { user } = useContext(AuthContext)
    const mySelection = selected.filter(select => select.selectedBy === user.email)
    const onlySelected = mySelection.filter(select => select.status === 'selected')

    const handleDelete = id => {
        if (confirm("Are you really want to delete this product")) {
            fetch(`http://localhost:7000/select/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted")
                        setReCallSelect(!reCallSelect)
                    }
                })
        }
        else {
            return
        }
    }

    const handlePayment = id => {
        const status = "enrolled";
        const addToDB = { status };

        if (confirm("Are you really want to pay for this class")) {
            fetch(`http://localhost:7000/select/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addToDB)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert("Enroll successful")
                        setReCallSelect(!reCallSelect)
                    }
                })
        }
        else {
            return
        }
    }

    return (
        <div>
            <div className='mb-20 mt-28 mx-12 ml-20'>
                <h1 className='text-2xl font-bold text-center'>My selected classes</h1>
                <ol className='grid grid-cols-5 gap-3 mt-2 bg-lime-500 text-black text-sm px-10 py-3 rounded-full text-center'>
                    <p>Photo</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Delete</p>
                    <p>Enroll</p>
                </ol>
                {
                    onlySelected?.map(data =>
                        <ol
                            key={data._id}
                            className='grid grid-cols-5 gap-3 mt-2 bg-lime-100 text-black text-sm px-10 py-3 rounded-full text-center'
                        >
                            <img className='w-10 h-10 object-cover rounded-full mx-auto' src={data?.photo} alt="" />
                            <p>{data?.name}</p>
                            <p>{data?.price}/-</p>
                            <div className='flex justify-center'>
                                <p onClick={() => handleDelete(data?._id)} className='btn rounded-full btn-sm w-20 bg-orange-500 hover:bg-orange-600 border-0 normal-case'>Delete</p>
                            </div>
                            <div className='flex justify-center'>
                                <p onClick={() => handlePayment(data?._id)} className='btn rounded-full btn-sm w-20 bg-lime-500 hover:bg-lime-600 border-0 normal-case'>Pay</p>
                            </div>
                        </ol>)
                }
            </div>
        </div>
    );
};

export default MySelectedClasses;