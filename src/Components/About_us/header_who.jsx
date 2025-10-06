
import photo1 from '../../Images/Hero_Images/photo_1.jpg';

const Header_who = () => {
  return (
    <section>
      <div className='flex container w-[80em] h-[23em]  bg-gradient-to-r from-white to-red-500 absolute top-[81px]'>
          <div className=" flex flex-row w-1/2">
            <label className='text-3xl top-[5em] left-[12em] absolute'>
              <h1 className='text-4xl font-semibold left-8 text-center'>About </h1>
              Kola Consulting
            </label>
          </div>
          <div className=" flex flex-row w-1/2 ">
            <img  width={500} className='h-[18em] absolute top-10 right-9' src={photo1} alt="Nono" />
          </div> 
      </div>
    </section>
  )
}

export default Header_who;
    
    
    