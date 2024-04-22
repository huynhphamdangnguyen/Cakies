import cakeBackground from '../../Components/Asset/img3.jpg';
import {TypeAnimation} from 'react-type-animation';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './ContentItem'
import ContentItem from './ContentItem';
import CakesItem from './CakesItem';
import cakes from '../../Components/Asset/img1.jpg'

const data = [
  {
    year: 2023,
    title: 'Facebook',
    duration: '2 Years',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis, ipsam, obcaecati ullam molestiae porro provident nam incidunt voluptatum dolore est. Dolorum vitae animi fuga iure necessitatibus eos veniam nihil.'
  },
  {
    year: 2023,
    title: 'Facebook',
    duration: '2 Years',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis, ipsam, obcaecati ullam molestiae porro provident nam incidunt voluptatum dolore est. Dolorum vitae animi fuga iure necessitatibus eos veniam nihil.'
  },
  {
    year: 2023,
    title: 'Facebook',
    duration: '2 Years',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis, ipsam, obcaecati ullam molestiae porro provident nam incidunt voluptatum dolore est. Dolorum vitae animi fuga iure necessitatibus eos veniam nihil.'
  }
] 


const Home = () => {
  return (
    <div className='home'>
      <img className='w-full h-screen object-cover object-left bg-white/50' src={cakeBackground} alt="Cake Background" />
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='font-style: italic sm-text-9xl text-9xl font-bold text-gray-300'>Cakies</h1>
          <h2 className='flex font-bold sm:text-3xl text-1xl pt-4 text-gray-300'>
          <TypeAnimation
            sequence={[
            'Here is Cakies shop',
            1000, 
            'The cake shop',
            1000,
            'Where we have a variety of different cakes',
            1000,
            'Enjoy your shopping moments',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
          repeat={Infinity}
    />
          </h2>
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaTwitter className='cursor-pointer' size={30} color='white'/>
            <FaFacebookF className='cursor-pointer' size={30} color='white'/>
            <FaInstagram className='cursor-pointer' size={30} color='white'/>
            <FaLinkedin className='cursor-pointer' size={30} color='white'/>
          </div>
        </div>
      </div>
      <div className="content">
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Content</h1>
          {data.map((item, idx) => (
            <ContentItem key={idx} year={item.year} title={item.title} duration={item.duration} detail={item.detail} />
          ))}
        </div>
      </div>
      <div className="cakes">
        <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Cakes</h1>
          <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eius perspiciatis enim quos voluptates aspernatur amet architecto iste dolor neque non, blanditiis vero excepturi ipsum, ipsam repudiandae. Optio, quasi. Cupiditate!</p>
          <div className='grid sm:grid-cols-2 gap-12'>
            <CakesItem img={cakes} title='Cake 1' />
            <CakesItem img={cakes} title='Cake 2' />
            <CakesItem img={cakes} title='Cake 3' />
            <CakesItem img={cakes} title='Cake 4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home