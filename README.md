mathematicss
============

A CSS grid with variable columns in the form of a javascript library.

### What is it?

Mathematicss turns this:

    <h1>Mathematicss</h1>

    <p>This is a live example of Mathematicss.js. The CSS for the grid system was generated and appended to the head of the html.</p>

    <div class="row">
      <div class="1of1">.1of1</div>
    </div>
  
    <div class="row">
      <div class="2of3">.2of3</div>
      <div class="1of3">.1of3</div>
    </div>
  
    <div class="row">
      <div class="1of2">.1of2</div>
  
      <div class="1of2">.1of2</div>
    </div>
  
    <div class="row">
      <div class="1of3">.1of3</div>
      <div class="1of3">.1of3</div>
      <div class="1of3">.1of3</div>
    </div>
  
    <div class="row">
      <div class="1of4">.1of4</div>
      <div class="1of4">.1of4</div>
      <div class="1of4">.1of4</div>
      <div class="1of4">.1of4</div>
    </div>

Into this:

![Mathematicss screenshot](http://imagentleman.github.io/mathematicss.png)

### Usage

Just include `mathematicss.js` somewhere on the page.

That's it. We allow variable column widths in the following way:

You add a class with a name spelling the fraction.
For example, if you write:

    <div class='1of3'></div>

Mathematicss will create a css class named 1of3, with a width of 1/3.
This way you can use percentages (like 50/100, which are easy to understand)
and define very fine grained sizes (ala 1/37). The units will be percentages
(%), so things will be responsive in most cases. And the fractions don't need
common denominators (1of2 can be next to a 10of36).

You can prepend a class with one of our specially assigned media query classes
and put the rule only in a specific media query.

So, for example:

    <div class='s-1of2'></div>

Will create this:

    /*This corresponds to the small size breakpoint and 
    all classes prefixed with "s-" go only here*/
    @media (max-width: 64rem) {  
    	.s-1of2 {
    		width: 50%;
    	}
    }

The available prefixes are these t-shirt like ones: `s-`, `m-`, `l-`, `xl-` and `xxl-`.

The available media query breakpoints are:

    /*Small screens. Classes prepended with "s-" are put in here. All classes use a t-shirt like notation.*/
    @media (max-width: 64rem) { } /* 0 - 640px */

    /*Medium screens. Class "m-"*/
    @media (min-width: 64.1em) and (max-width: 102.4rem) { } /* 641 - 1024px */

    /*Large screens. Class "l-"*/
    @media (min-width: 102.5rem) and (max-width: 144rem) { } /* 1025 - 1440px */
    
    /*XLarge screens. Class "xl-"*/
    @media (min-width: 144.1rem) and (max-width: 192rem) { } /* 1441 - 1920px */
    
    /*XXLarge screens. Class "xxl-*/
    @media (min-width: 192.1rem) { } /* 1921px and up */
    
## Production

The entire style will be included on the head with the
visible id="mathemusic-for-my-ears" (minified).

It will also be printed on the console.

When ready for production, just remove mathematicss.js script
tag and include the generated style.

## Wait, are those names valid? 

In HTML5 yes, in CSS you can't start a class
name with a number, but we escape them for you, so they are technically [valid](http://mathiasbynens.be/notes/css-escapes).
