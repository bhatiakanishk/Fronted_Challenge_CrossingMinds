import { style } from '@vanilla-extract/css'

/* 
This is an example of style using Vanilla Extract
https://vanilla-extract.style 

If you want to write styles using standard CSS, you can write and import `.css` files instead.
*/

export const appStyle = style({
  marginInline: 'auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  fontFamily: 'sans-serif',
})