/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from 'query-string';

const CategoryBox = ({ categoryItem, selected }) => {
    const { label, icon: Icon } = categoryItem;
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params.toString());
        }
        const updatedQuery = { ...currentQuery, category: label }

        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery
        })
        navigate(url);
        
    }
    
    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-3 p-3  transition cursor-pointer hover:text-neutral-900 ${selected ? 'border-b-2 border-b-neutral-800 text-neutral-900': 'text-neutral-500'}`}>

            <Icon size={26} />
            <div className=" text-sm font-medium">{ label}</div>
        </div>
    );
};

export default CategoryBox;