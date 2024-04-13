import React, { useState } from 'react'

const ProductList = () => {

  const [images, setImages] = useState({
    img1: "https://static.vecteezy.com/system/resources/previews/035/320/450/non_2x/ai-generated-cake-on-plate-isolated-on-transparent-background-png.png",
    img2: "https://static.vecteezy.com/system/resources/previews/021/162/361/non_2x/slice-of-white-chocolate-latte-cake-hand-drawn-png.png",
    img3: "https://static.vecteezy.com/system/resources/previews/018/749/630/non_2x/cake-delicious-3d-isolated-png.png",
    img4: "https://static.vecteezy.com/system/resources/previews/024/786/117/non_2x/pink-cake-with-strawberry-the-theme-of-food-and-dessert-isolated-object-transparent-background-ai-generated-free-png.png"
  })

  const [activeImg, setActiveImage] = useState(images.img1)

  const [amount, setAmount] = useState(1);

  return (
    <div className='flex flex-col justify-between lg:flex-row p-8 gap-16 lg:items-center'>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        <img src={activeImg} alt='' className='h-full w-full aspect-square object-cover rounded-xl'/>
        <div className='flex flex-row justify-between h-16'>
          <img src={images.img1} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
          <img src={images.img2} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
          <img src={images.img3} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
          <img src={images.img4} alt='' className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <span className='text-violet-500 font-semibold'>Cakes</span>
          <h1 className='text-3xl font-bold'>Tasty pie</h1>
        </div>
        <p className='text-gray-700'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, esse accusamus enim impedit reprehenderit, consequatur necessitatibus, mollitia officia quas optio velit vero dolores illo corporis omnis delectus consequuntur laudantium quisquam.
        </p>
        <h6 className='text-2xl font-semibold'>199.000vnd</h6>
        <div className='flex flex-row items-center gap-12'>
          <div className='flex flex-row items-center'>
            <button className='bg-gray-100 py-2 px-5 rounded-lg text-indigo-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
            <span className='py-4 px-6 rounded-lg'>{amount}</span>
            <button className='bg-gray-100 py-2 px-4 rounded-lg text-indigo-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </div>
          <button className='bg-indigo-800 text-white font-semibold py-3 px-6 rounded-xl h-full'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductList