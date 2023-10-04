import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='py-10 space-y-5'>
            <div className='flex justify-center'>
                <img src={logo} alt="" />
            </div>
            <div className='text-center'>
                <p className='mb-2'>Journalism Without Fear or Favour</p>
                <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;