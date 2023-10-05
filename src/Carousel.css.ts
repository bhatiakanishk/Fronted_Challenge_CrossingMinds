import { style, globalStyle } from '@vanilla-extract/css';

export const CarouselStyles = {
    carouselContainer: style({
        marginTop: '32px',
        marginBottom: '32px',
        justifyContent: 'space-between'
    }),
    carouselHeader: style({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }),
    carouselNav: style({
        display: 'flex',
        gap: '16px',
    }),
    carouselItems: style({
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        fontSize: '12px'
    }),
    carouselItem: style({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.1)',
        padding: '16px',
        minWidth: '140px',
        fontFamily: "unset",
        fontWeight: "lighter",
        fontSize: '14px',
        ':focus-within': {
            outline: '2px solid blue', // Blue outline on focus within the entire item
            outlineOffset: '2px'
        }
    }),
    carouselPrice: style({
        fontSize: '20px',
        fontFamily: "unset"
    }),
    addToCart: style({
        height: '36px',
        width: '122px',
        borderRadius: '5px',
        display: 'flex',
        cursor: 'pointer',
        border: '1px solid black',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        letterSpacing: '1px',
        fontFamily: "unset",
        fontWeight: "lighter",
        fontSize: '13px',

        ':hover': {
            border: '1px solid #000',
            backgroundColor: 'rgba(0, 0, 0, 0.8)' // Slightly dimmed background on hover
        },

        ':active': {
            border: '1px solid #000',
            backgroundColor: 'rgba(0, 0, 0, 0.6)' // Even more dimmed background on active
        },

        ':focus': {
            outline: '2px solid blue', // Blue outline on focus
            outlineOffset: '2px'
        },

        ':disabled': {
            backgroundColor: 'rgba(0, 0, 0, 0.3)', // Lighter background for disabled state
            color: 'rgba(255, 255, 255, 0.7)', // Dimmed text color for disabled state
            cursor: 'not-allowed'
        }
    }),
    imageStyle: style({
        height: '180px'
    })
};

// For the nested img styling
globalStyle(`${CarouselStyles.carouselItem} > img`, {
    maxHeight: '200px',
    width: 'auto'
});