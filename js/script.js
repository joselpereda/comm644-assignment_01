$(function() {
// 3. Select the <h2> elements within the <section> and <aside> tags and apply a CSS solid, black, 1px border to them
    $('section h2').css({"display":"inline-block", "border":"1px solid black"});
    $('aside h2').css({"display":"inline-block", "border":"1px solid black"});

// 4. Select the <h2> elements within the <section> and <aside> tags and apply a color of #CC1C0D to them
    $('section h2').css({"color": "#CC1C0D"});
    $('aside h2').css({"color": "#CC1C0D"});

// 5. Select the <h2> elements within the <section> and <aside> tags and apply a padding of 3px to the top and bottom and 20px to the left side
    $('section h2').css({"padding-top": "3px", "padding-bottom": "3px", "padding-left":"20px"});
    $('aside h2').css({"padding-top": "3px", "padding-bottom": "3px", "padding-left":"20px"});

// 6. Select the <h2> elements within the <section> and <aside> tags and apply a border radius of 5px to the top right and bottom left corners only
    $('section h2').css({"border-top-right-radius": "5px", "border-bottom-left-radius": "5px"});
    $('aside h2').css({"border-top-right-radius": "5px", "border-bottom-left-radius": "5px"});



});