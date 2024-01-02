import bigman from '../../assets/bigman.jpeg'

const Users = () => {
  return (
    <section>
        <div>
            <h1>See What Our Users Has To Say</h1>
            <p>Every month, we bring the spotlight to the heart of Flexa`s dynamic financial ecosystem, 
            unveiling the comprehensive stories of individuals who have harnessed the full spectrum of Flexa`s capabilities.</p>
        </div>

        {/* CARDS */}
        
        <div>
        <div className='flex items-center bg-red-700'>
          <img className='w-[70px] h-[70px] rounded-[50%]' src={bigman} alt="" />
          <h4>Coker Gbolahan.O</h4>
        </div>
        <p>Helpful responsive customer support has been a standout feature for me.</p>
          <p>7.30am, 23rd March 2023</p>
        </div>
    </section>
  )
}

export default Users