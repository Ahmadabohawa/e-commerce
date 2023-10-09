import React from 'react';
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
function Products() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products"); //-> Array[...]
                setData(await response.clone().json());
                console.log("await response.clone().json() : ",await response.clone().json());//->Array[...] 
                setFilter(await response.json());
                setLoading(false);
        }
        getProducts();
        console.log("data : ",data) //->Array[..]
    }, []);

    const Loading1 = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={380} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={380} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={380} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={380} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat);
        setFilter(updateList)
    }

    const ShowProducts1 = () => {
        return (
            <>
                <div className='buttons d-flex  justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2' onClick={() => setFilter(data)}>All</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothes</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothes</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronic</button>

                </div>
                {filter.map((product) => {
                    return (
                        <div className='col-md-3 mb-4' key={product.id}>
                            <div className='card h-100 text-center p-4'>
                                <img src={product.image} className="card-image-top" alt={product.title} height="250px" />
                                <div className='body-card'>
                                    <h5 className='card-title mb-0'>{product.title.substring(0, 12)}...</h5>
                                    <p className='card-text lead fw-bold'>
                                        ${product.price}
                                    </p>
                                    <NavLink to={`/products/${product.id}`} className='btn btn-outline-dark'>Buy Now</NavLink>
                                </div>

                            </div>

                        </div>

                    )
                })}
            </>

        )
    }
    return (
        <div className='container my-5 py-5'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center'>
                {loading ? <Loading1 /> : <><ShowProducts1 />
                </>
                }

            </div>
            <div>
            </div>
        </div>
    );
}

export default Products

