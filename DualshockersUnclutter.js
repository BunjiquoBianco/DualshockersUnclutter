// ==UserScript==
// @name       DualshockersUnclutter
// @namespace  https://github.com/BunjiquoBianco
// @version    1.0
// @description  Hides all comments, social junk and ads from Dualshocker articles.
// @match      http://www.dualshockers.com/*
// @copyright  None. Feel free to use as you wish.
// ==/UserScript==

// 'jQuery' is the Dualshockers reference to jQuery as they have no conflict enabled.
// If you wish to remove adverts, use AdBlock.

//Hide comments
jQuery('#comments').hide();
//Hide recent comments
jQuery('.textwidget').hide();

//Hide social media junk
jQuery('.social_icon_links').hide();
jQuery('.sharebar').hide();
jQuery('#footer_1').html('<br/>');

//Hide twitch
jQuery('.twitch-widget-outer').hide();