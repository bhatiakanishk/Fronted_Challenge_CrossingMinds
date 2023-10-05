import React from 'react';
import { CarouselStyles } from './Carousel.css';
import { getMockItemData } from './mockData'

// Define an interface for carousel item data
interface CarouselItem {
    itemId: string;
    first_image: string;
    title: string;
    "variants.price"?: number[];
    [key: string]: unknown;
}

export function Carousel({ title }: { title: string }) {
    // State to store carousel items
    const [items, setItems] = React.useState<CarouselItem[]>([]);
    // Reference for the div containing carousel items, used for scrolling
    const carouselItemsRef = React.useRef<HTMLDivElement>(null);
    // Function to scroll the carousel left or right by a fixed offset
    const scrollCarousel = (direction: 'left' | 'right') => {
        if (!carouselItemsRef.current) return;
        const offset = 200;
        if (direction === 'left') {
            carouselItemsRef.current.scrollLeft -= offset;
        } else if (direction === 'right') {
            carouselItemsRef.current.scrollLeft += offset;
        }
    };
    // Fetch the carousel items once when the component mounts
    React.useEffect(() => {
        getMockItemData()
            .then(data => {
                setItems(data as CarouselItem[]);
            })
            .catch(error => {
                console.error('Error fetching carousel data:', error);
            });
    }, []);

    return (
        <div className={CarouselStyles.carouselContainer}>
            <div className={CarouselStyles.carouselHeader}>
                <h2>{title}</h2>
                <div className={CarouselStyles.carouselNav}>
                    <button onClick={() => scrollCarousel('left')}>&lt;</button>
                    <button onClick={() => scrollCarousel('right')}>&gt;</button>
                </div>
            </div>
            <div ref={carouselItemsRef} className={CarouselStyles.carouselItems}>
                {items.map(item => {
                    const price = item["variants.price"] && item["variants.price"][0];
                    return(
                        <div key={item.itemId} className={CarouselStyles.carouselItem}>
                            <img className={CarouselStyles.imageStyle} src={item.first_image} alt={item.title} />
                            <p className={CarouselStyles.carouselItems}>{item.title}</p>
                            {price ? (
                                <p className={CarouselStyles.carouselPrice}>${price}</p>
                            ) : (
                                <p className={CarouselStyles.carouselPrice}>Price Not Available</p>
                            )}
                            <button className={CarouselStyles.addToCart}>Add to cart</button>
                        </div>
                    )})}
                </div>
            </div>
        );
    }