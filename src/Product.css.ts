import { style } from '@vanilla-extract/css';

// For dynamic screens
export const breakpoints = {
    mobile: '1080px'
};

export const ProductStyles = {
    productGap: style({
        marginTop: '32px',
    }),
    productContainer: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '@media': {
            [`(min-width: ${breakpoints.mobile})`]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '0 64px',
            },
        },
    }),

    productImage: style({
        width: '100%',
        paddingBottom: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '@media': {
            [`(min-width: ${breakpoints.mobile})`]: {
                width: 'calc(50% - 32px)',
                height: 'auto',
                marginLeft: '0',
                paddingBottom: '60%',
            },
        },
    }),

    productInfo: style({
        width: '100%',
        padding: '16px',
        boxSizing: 'border-box',
        '@media': {
            [`(min-width: ${breakpoints.mobile})`]: {
                width: 'calc(50% - 32px)',
                marginLeft: '0',
            },
        },
    }),

    productTitle: style({
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginBottom: '25px',
    }),

    productPrice: style({
        fontSize: '20px',
        letterSpacing: '1px',
        marginBottom: '20px',
    }),

    productDetailItem: style({
        fontSize: '16px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        marginTop: '16px',
    }),

    quantitySelector: style({
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        border: '1px solid black',
        padding: '8px',
        width: '120px',
        justifyContent: 'space-between',
    }),

    quantityButton: style({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
        cursor: 'pointer',
        fontSize: '20px',
    }),

    addToCartButton: style({
        marginTop: '16px',
        width: '100%',
        height: '36px',
        display: 'flex',
        fontSize: '18px',
        cursor: 'pointer',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: '1px',
    }),

    buyNowButton: style({
        marginTop: '16px',
        width: '100%',
        height: '36px',
        display: 'flex',
        fontSize: '18px',
        cursor: 'pointer',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        letterSpacing: '1px',
    }),

    productDescription: style({
        marginTop: '25px',
        fontSize: '16px',
        letterSpacing: '1px',
    }),
};