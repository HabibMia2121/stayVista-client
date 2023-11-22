import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    
    return (
        <Container>
            <div className="pb-4 my-5 flex items-center justify-between overflow-x-auto ">
                {categories.map((categoryItem, idx) => <CategoryBox
                    key={idx}
                    categoryItem={categoryItem}
                    selected={category === categoryItem.label}
                    
                />)}
                
            </div>
        </Container>
    );
};

export default Categories;