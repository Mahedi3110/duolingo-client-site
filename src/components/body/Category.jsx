import React from 'react';

const Category = ({ data, btn }) => {
    return (
        <div onClick={() => btn(data.product)} className="relative overflow-hidden rounded-3xl shadow-lg cursor-pointer">
            <img className="object-cover w-full opacity-20" src={data.categoryPhoto} alt={data.categoryName} />
            <div className="absolute bottom-0 left-0 w-full">
                <h4 className="text-xl tracking-tight text-white text-center mb-5">{data.categoryName}</h4>
            </div>
        </div>
    );
};

export default Category;