import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    } ,[]);
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-5">All Categories</h2>
            {
                categories.map(category => <Link 
                    className="block ml-4 text-xl font-semibold mb-3 text-gray-500" 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >
                    {category.name}
                    </Link>)
            }
        </div>
    );
};

export default LeftSideNav;