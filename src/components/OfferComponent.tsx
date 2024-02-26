export const OfferComponent = () => {
  return (
    <div className='bg-[url("/offer.jpg")] bg-cover bg-no-repeat h-full my-5 py-10'>
        <div className='px-3 py-12 mx-10 size-fit'>
            <div className='border-l-4 border-black h-32 flex flex-col mb-10'>
                <p className='text-black font-bold text-md pl-10'>SPECIAL OFFER</p>
                <p className='font-bold text-5xl pl-10 text-white'>PRODUCTS FOR YOUR <br />BEST FRIENDS</p>
            </div>
            <p className='text-white'>
                Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea <br />ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod <br />et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.
            </p>
            <div className='flex gap-10 mt-10'>
                <button className='bg-white text-black font-bold text-xl w-3/12 border-2 border-white'>
                    SHOP NOW
                </button>
                <button className='text-[#F3F3F3] border-2 border-white w-3/12 py-3 text-xl font-bold hover:bg-white hover:text-black duration-300'>
                    READ MORE
                </button>
            </div>
        </div>
    </div>
  )
}
