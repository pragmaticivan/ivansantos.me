$( document ).ready(function() {
    $( '#container' ).SecretNav({
        navSelector: '.side-menu',         // selector of the nav tag
        openSelector: '.open-menu', // selector of the menu's opener
        position: 'left'            // left | top
    });
});
