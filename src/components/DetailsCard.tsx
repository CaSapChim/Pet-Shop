import React from 'react'

interface DetailsCard {
    visible: boolean;
    name: string | undefined;
    desc: string | undefined;
    imageUrl: string | undefined;
    close: () => void;
}

export const DetailsCard: React.FC<DetailsCard> = ({ visible, name, desc, imageUrl, close }) => {
    if (!visible)
        return null;

    return (
        <div className='fixed inset-0 top-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
            <div className='h-4/6 w-2/5 bg-white p-3 rounded-lg animate-showDetails'>
                <h3 
                    className="cursor-pointer text-3xl font-bold flex justify-end mr-2"
                    onClick={close}
                >
                    &#10539;
                </h3>
                <h1 className='font-extrabold text-3xl text-center my-2'>{name}</h1>
                <div className='text-center'>
                    <img src={imageUrl} alt="product image" className='inline-block w-[150px] h-[150px]'/>
                    <p className='my-3 text-gray-500'>{desc}</p>
                </div>
            </div>
        </div>
    ) 
}
