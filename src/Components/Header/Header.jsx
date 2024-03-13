import Profile from '../../assets/images/profile.png'

const Header = () => {
  return (
    <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
      <h1 className="text-4xl font-bold">KnowLedge Cafe</h1>
      <img src={Profile} alt=""/>
    </header>
  );
};

export default Header;