import { createContext, useContext, useEffect, useReducer } from "react";
import { useAppContext } from "./productcontext"; 
import reducer from '../reducer/FilterReducer';


// Create Filter Context
const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products : [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        maxPrice: 0,
        price: 0,
        minPrice: 0,


    },
};

export const FilterProvider = ({children}) => {

    const { products }   =  useAppContext();
    
    const [state, dispatch] = useReducer(reducer, initialState);

    //To Set The Grid View 
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"});
    }

    //To Set The List View 
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"});
    }

    //Sorting Funtion
    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({type: "GET_SORT_VALUE", payload: userValue });
    }

    //Update the Filter value in search
    const updateFilterValue = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}});
    }

    //To Clear the Filters
    const clearFilters = () => {
       dispatch({type: "CLEAR_FILTERS"}); 
    };

    //To Sort the products
    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"});
        dispatch({type: "SORTING_PRODUCTS"});
    }, [products, state.sorting_value, state.filters]);

    
    // Dispatch action to load products into the filter 
    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products});

    },[products]);


    return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters, }}>
        {children}
    </FilterContext.Provider>
    );
};


//Custom Hook of filter context
export const useFilterContext = () => {
    return useContext(FilterContext);
};