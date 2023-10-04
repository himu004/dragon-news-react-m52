import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-slate-200 p-2 rounded-lg">
            <button className="btn btn-neutral mr-2">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 text-green-400" to='/'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus provident?
                </Link>
                <Link className="mr-12 text-red-400" to='/'>
                     ipsum dolor, sit amet consectetur adipisicing elit. Doloribus provident?
                </Link>
                <Link className="mr-12 text-blue-400" to='/'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus provident?
                </Link>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;