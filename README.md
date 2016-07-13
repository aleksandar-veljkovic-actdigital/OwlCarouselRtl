# Owl Carousel Rtl

Wrapper for right to left owl carousel slider orientation.

### Requirements:

 * [ jQuery ](http://jquery.com/download/)
 * [ OwlFonk / OwlCarousel (v.1.x)](https://github.com/OwlFonk/OwlCarousel)

## Usage:

### Including

Same as Owl Carousel, plus you have to include **owl.carousel.rtl.js** from this prject

Load jQuery(1.7+) and include Owl Carousel plugin files

```html
<!-- Basic stylesheet -->
<link rel="stylesheet" href="owl-carousel/owl.carousel.css">
 
 <!-- Default Theme -->
<link rel="stylesheet" href="owl-carousel/owl.theme.css">
 
<!-- Include js plugin -->
<script src="jQuery.js"></script>
 
<!-- Include js plugin -->
<script src="owl-carousel/owl.carousel.js"></script>

<!-- Include js plugin -->
<script src="owl-carousel-rtl/owl.carousel.rtl.js"></script>
```
### Call Plugin:

Call $("some-selector").owlCarouselRtl() instead of $("some-selector").owlCarousel()

```js
$(".owl-carousel").owlCarouselRtl();
```

### Setting options:

Same as basic OwlCarouse, extended by:

* **rtlJump** - [type:boolean, defaul:false] - Select whether carousel will jump to the first element from right, after init.

### Exstra fitures:

* Fix **afterInit** event to wait **data('owlCarousel')** object Dom apirance
* Fixing 'Navigation buttons trigger twice' on Galaxy S3


### if you are using opencart journal2 :
Journal (opencart extension) version 2.0 which using owl-careusel 1.3 not support RTL .

you need to check language if it is RTL or not :

RTL 
```js
$(".owl-carousel").owlCarouselRtl();
```
and import owl.careusel.rtl.css
```html
 <!-- RTL CSS  -->
<link rel="stylesheet" href="owl-carousel-rtl/owl.carousel.rtl.css">
```
LTR
```js
$(".owl-carousel").owlCarousel();
```
License
------------
The MIT License (MIT)
