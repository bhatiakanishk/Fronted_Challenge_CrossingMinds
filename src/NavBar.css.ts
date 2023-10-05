import { style } from '@vanilla-extract/css';

/* 
This is an example of style using Vanilla Extract
https://vanilla-extract.style 

If you want to write styles using standard CSS, you can write and import `.css` files instead.
*/

export const StickyHeader = {
  header: style({
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
    width: '100%',
    backgroundColor: '#fcfcfc',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)'
  }),
  title: style({
    flex: 1,
    textAlign: 'left',
    fontSize: '20px',
    fontWeight: 'bold',
  }),
  cartIcon: style({
    width: '48px',
    height: '48px',
  }),
};