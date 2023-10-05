import { useState, useEffect } from 'react';
import { ProductStyles } from './Product.css';
import { getMockProductPageData } from './mockData';

// Define an interface for the product data
interface ProductData {
    value: {
        title: string;
        price: number;
        tags: string[];
        options: { name: string; values: string[] }[];
        description: string;
        images: string[];
    };
}

export function Product() {
    // State variable to hold the product data
    const [productData, setProductData] = useState<ProductData | null>(null);

    useEffect(() => {
        // Hard-code the product handle for the product to be fetched
        const productHandle = 'sandy-ss-12996';

        // Fetch product data using the mock API
        getMockProductPageData({ handle: productHandle })
            .then((data) => {
                // Cast the received data to the ProductData type and set the state
                setProductData(data as unknown as ProductData);
            })
            .catch((error) => {
                console.error('Error fetching product data:', error);
            });
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    const [quantity, setQuantity] = useState(1);
    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };
    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className={ProductStyles.productGap}>
            <div className={ProductStyles.productContainer}>
                <div
                    className={ProductStyles.productImage}
                    style={{
                        backgroundImage: `url(${productData?.value?.images[0]})`,
                        backgroundSize: 'cover',
                    }}></div>
                <div className={ProductStyles.productInfo}>
                    <div className={ProductStyles.productTitle}>
                        {productData?.value?.title}
                    </div>
                    <div className={ProductStyles.productPrice}>
                        {productData?.value?.price? `$${productData.value.price / 100}`: ''}
                    </div>
                    <div className={ProductStyles.productDetailItem}>
                        {productData?.value?.tags[4]? `Color: ${productData.value.tags[4]}`: ''}
                    </div>
                    <div className={ProductStyles.productDetailItem}>
                        {productData?.value?.options[0]?.values[0]? `Size: M`: ''}
                    </div>
                    <div className={ProductStyles.quantitySelector}>
                        <div className={ProductStyles.quantityButton} onClick={decrementQuantity}>-</div>
                        <div>{quantity}</div>
                        <div className={ProductStyles.quantityButton} onClick={incrementQuantity}>+</div>
                    </div>
                    <div className={ProductStyles.addToCartButton}> Add to cart</div>
                    <div className={ProductStyles.buyNowButton}>Buy it now</div>
                    <div
                        className={ProductStyles.productDescription}
                        dangerouslySetInnerHTML={{ __html: productData?.value?.description || '',}}></div>
                </div>
            </div>
        </div>
    );
}