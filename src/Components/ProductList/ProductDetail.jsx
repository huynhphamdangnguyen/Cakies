import { useEffect, useState } from 'react';
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../Counter/cartSlice';
import { supabase } from '../../config/supabaseClient';

const ProductDetail = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    console.log("🚀 ~ ProductDetail ~ cartItems:", cartItems)


    const handleAddToCart = () => {
        dispatch(addToCart({
            id: products.id,
            title: products.title,
            price: products.price,
            quantity: quantity
        }))
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select()
                    .eq('id', id)
                    .single()
                setProducts(data)
            } catch (error) {
                console.log("Error fetching data:", error)
            }
        }
        fetchData()
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [id])
    


    return (
        <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
            <div className='p-3 max-w-7xl m-auto'>
                <div className='mt-5'>
                    <a href="/" className='text-gray-600'>Home</a>
                    <a href="/products" className='font-bold text-black'>/Products</a>
                </div>
                <div className='mt-2 sm:mt-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                        <div>
                            <img src={products.image} alt="" className='w-full' />
                        </div>
                        <div>
                            <h1 className='text-4xl text-left font-bold text-gray-800'>{products.title}</h1>
                            <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque magni atque laborum suscipit, est aspernatur ab consectetur illum expedita. Id et ipsum beatae. Eaque quasi repellendus magni iure corporis?</p>
                            <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </span>
                            <p className='text-xl text-red-500 font-semibold sm:text-2xl'>{products.price}vnd</p>
                            <div className='mt-4'>
                                <div className='text-left flex flex-col gap-2 w-full'>
                                    <label className='font-semibold'>Quantity</label>
                                    <input
                                        type="number" name='price' id='price'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        defaultValue={1}
                                        required
                                        className='border border-gray-300 text-sm font-semibold mb-1 max-w-full outline-none rounded-md m-0 py3 px-4 md:py-3 md:py-3 md:px-4 focus:border-[#001b5e]' />
                                </div>
                                <div className='w-full text-left my-4'>
                                    <button onClick={handleAddToCart} className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-[#001b5e] text-white font-bold border border-[#001b5e] rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-[#001b5e] lg:m-0 md:px-6'>
                                        <span>Confirmed Order</span>
                                        <FaArrowAltCircleRight/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-black/75 mt-12'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo. Cum fugit voluptatum inventore quidem placeat. Blanditiis illum ea officiis quo illo enim eum vel est fuga non, tenetur libero!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo. Cum fugit voluptatum inventore quidem placeat. Blanditiis illum ea officiis quo illo enim eum vel est fuga non, tenetur libero!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo. Cum fugit voluptatum inventore quidem placeat. Blanditiis illum ea officiis quo illo enim eum vel est fuga non, tenetur libero!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, illo. Cum fugit voluptatum inventore quidem placeat. Blanditiis illum ea officiis quo illo enim eum vel est fuga non, tenetur libero!</p>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail;
