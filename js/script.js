$(function() {
// MODIFY THE HEADINGS
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

// 7. Select the <h2> elements within the <section> and <aside> tags and apply a background color of #DFE3E6
    $('section h2').css({"background-color": "#DFE3E6"});
    $('aside h2').css({"background-color": "#DFE3E6"});

// MODIFY THE NAVIGATION MENU
// 8. Programmatically add the class “navigation” to each of the 5 navigation menu items
    $('nav ul li a').addClass('navigation');

// 9. Select the navigation classes and apply a CSS solid, #929CA4, 1px border to them
    $('a.navigation').css({"color":"solid #929CA4","display":"inline-block", "border":"1px solid black"});

// 10. Select the navigation classes and apply a color of #CC1C0D to them
    $('a.navigation').css({"color":"#CC1C0D"});

// 11. Select the navigation classes and apply a padding of 3px to the top and bottom and 20px to the left side
    $('a.navigation').css({"padding-top": "3px", "padding-bottom": "3px", "padding-left":"20px"});

// 12. Select the navigation classes and apply a background color of #DFE3E6
    $('a.navigation').css({"background-color": "#DFE3E6"});

// MAIN CONTENT
// 13. Programmatically remove the vprospect, vconvert, and vretain classes from the <p> tags in the main <section> tag
    $('section p').removeClass('vprospect vconvert vretain');

// 14.Programmatically add the text “Chevy Dealers Association” after the word “President” in the client testimonials section. Make sure to programmatically add a line break after the word “President” so that the new text you’re adding is placed directly underneath


});