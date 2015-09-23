# jQuery/Handlebars Ajax Partial Fetcher

This simple code example uses jQuery Ajax and Handlebars JS with a convenient and easy to follow custom fetch method that will load html content from external html files into the desired target element in your main html file. Making use of Handlebars JS you may optionally pass data to dynamically populate the template partials. **Note since we are using $.ajax you must run this on a server either remotely or locally to prevent getting CORS errors.**

This project came about because writing templates inside of script tags makes me cranky and why not load the templates from external html files instead? Anyway I made it cause it made me happy to use. I do know I could use require.js or other libtraries to combine external files, but hey sometimes I don't need all that power and I just want to build simple sites that already include jQuery. Also I made this in like 5 minutes so...

## Getting started

1. In your HTML file that you wish to load partials into simply link to the following libraries  
```<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.2/handlebars.min.js"></script>```
2. Then link to the fetch.js or fetch.min.js (minified) version  
`<script src="js/fetch.js"></script>`
3. Then within script tags call fetch and pass arguments as strings for the html file location, the target element to append the content into (using jQuery/CSS selector syntax), and optionally pass a data object where the key in the data object matches the label in html partial (using handlebars syntax). Here are a few examples:  
```<script>
$(function(){
  fetch('partials/header.html', 'body', {title: 'Home'});
  fetch('partials/nav.html', 'header');
  fetch('partials/footer.html', 'body');
});
</script>```

If you want to test upload to a server or run locally using: [python SimpleHTTPServer](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/), or [node http-server](https://www.npmjs.com/package/http-server), or [MAMP](https://www.mamp.info/en/) etc. Again since we are using $.Ajax you will get CORS error if you try to run it from file:/// without running it on a localhost server!

Thats it!

[Working Demo here](http://jongrover.github.io/jquery-handlebars-partial-fetcher/)

## Requires Libraries

- [HandleBars](http://handlebarsjs.com/)
- [jQuery](http://jquery.com/)

## License

MIT License. Created by [Jon Grover](github.com/jongrover) with Love at the Flatiron School.

## Contact

hello@jonathangrover.com