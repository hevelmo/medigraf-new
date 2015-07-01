/*
    In this section will be added some necessary functions and code when
    the page loads and is ready.
    The manage of the DOM elements events will be here too.
*/

$(document).ready(function() {
        

    /* ------------------------------------------------------ *\
     [METHOS Control] Serialize Form
    \* ------------------------------------------------------ */
    // Add favicon
    window.onload = function() {
        favicon.change("img/medigraf.ico");
        // Uncomment to see how change() will cancel the animation
        setTimeout(function() { favicon.change("img/medigraf.ico") }, 10000);
    }

    //This method change a form into a JSON
    $.fn.serializeFormJSON = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    /* ------------------------------------------------------ *\
     [METHOS Control] Currency Format
    \* ------------------------------------------------------ */

    Number.prototype.format = function(n, x) {
        var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
    };



    /* ------------------------------------------------------ *\
        EVENT CONTROL
    \* ------------------------------------------------------ */


    //Make a group of events for each url defined in room.js, each one of
    //These events has to be handled by one of the methods defined in the related
    //Group in methods.js


    /* ------------------------------------------------------ *\
     [Methods] DEMO'
    \* ------------------------------------------------------ */

    // CLICK BACK TO TOP BUTTON
    $(domEl.body_recurrent).on(Gumby.click, domEl.top_button, function(){
      $('.content #scrollarea').animate( { scrollTop:0}, 750);
    });
    // CLICK GO PRIVACY NOTICE
    $(domEl.body_recurrent).on('click', domEl.go_privacy_notice, clickActionsMethods.clickGoPrivacyNotice);
    $(domEl.body_recurrent).on(Gumby.click, domEl.go_privacy_notice, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    // CLICK GO LEGAL NOTICE
    $(domEl.body_recurrent).on('click', domEl.go_legal_notice, clickActionsMethods.clickGoLegalNotice);
    $(domEl.body_recurrent).on(Gumby.click, domEl.go_legal_notice, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK NAV SCROLL TO HOME -> slider
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.scrollTo_home, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
        $(domEl.scrollTo_home).addClass('current');
        $(domEl.scrollTo_view_projects).removeClass('current');
        $(domEl.scrollTo_view_services).removeClass('current');
    });
    // CLICK NAV SCROLL TO PORTOFOLIO -> porfolio
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.scrollTo_view_projects, function(){
        $('.content #scrollarea').animate({scrollTop: 675}, 750);
        $(domEl.scrollTo_view_projects).addClass('current');
        $(domEl.scrollTo_home).removeClass('current');
        $(domEl.scrollTo_view_services).removeClass('current');
    });
    // CLICK NAV SCROLL TO SERVICES -> services
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.scrollTo_view_services, function(){
        $('.content #scrollarea').animate({scrollTop: 1350}, 750);
        $(domEl.scrollTo_view_services).addClass('current');
        $(domEl.scrollTo_home).removeClass('current');
        $(domEl.scrollTo_view_projects).removeClass('current');
    });

    // CLICK NAV GO VIEW PROJECTS
    $(domEl.div_recurrent).on('click', domEl.view_projects, clickActionsMethods.clickGoProjects)
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_projects, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK NAV GOBACK SERVICES
    $(domEl.div_recurrent_main_nav).on('click', domEl.return_home_services, clickActionsMethods.clickReturnServices);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.return_home_services, function(){
        $('.content #scrollarea').animate({scrollTop: 1350}, 750);
        $(domEl.scrollTo_view_services).addClass('current');
        $(domEl.scrollTo_home).removeClass('current');
    });

    // CLICK NAV GOBACK HOME
    $(domEl.div_recurrent_main_nav).on('click', domEl.return_home, clickActionsMethods.clickReturnServices);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.return_home, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.return_home, clickActionsMethods.clickReturnServices);
    $(domEl.div_recurrent).on(Gumby.click, domEl.return_home, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK LOGO GOBACK HOME    
    $(domEl.body_recurrent).on('click', domEl.return_home_logo, clickActionsMethods.clickReturnServices);
    $(domEl.body_recurrent).on(Gumby.click, domEl.return_home_logo, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO BLOG
    $(domEl.div_recurrent_main_nav).on('click', domEl.go_blog, clickActionsMethods.clickGoBlog);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.go_blog, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.go_blog, clickActionsMethods.clickGoBlog);
    $(domEl.div_recurrent).on(Gumby.click, domEl.go_blog, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO VIEW PORTFOLIO
    $(domEl.div_recurrent_main_nav).on('click', domEl.go_porfolio, clickActionsMethods.clickGoPortfolio);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.go_porfolio, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.go_porfolio, clickActionsMethods.clickGoPortfolio);
    $(domEl.div_recurrent).on(Gumby.click, domEl.go_porfolio, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    
    // CLICK GO PROJECT FUSSION JEANS
    $(domEl.div_recurrent_main_nav).on('click', domEl.view_project_fussion, clickActionsMethods.clickGoFussionJeans);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.view_project_fussion, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.view_project_fussion, clickActionsMethods.clickGoFussionJeans);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_project_fussion, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO PROJECT FORD CAVSA
    $(domEl.div_recurrent_main_nav).on('click', domEl.view_project_cavsa, clickActionsMethods.clickGoFordCavsa);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.view_project_cavsa, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.view_project_cavsa, clickActionsMethods.clickGoFordCavsa);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_project_cavsa, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO PROJECT OKUMA SUSHI
    $(domEl.div_recurrent_main_nav).on('click', domEl.view_project_okuma, clickActionsMethods.clickGoOkumaSushi);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.view_project_okuma, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.view_project_okuma, clickActionsMethods.clickGoOkumaSushi);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_project_okuma, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO PROJECT JOVY CANDY
    $(domEl.div_recurrent_main_nav).on('click', domEl.view_project_jovyCandy, clickActionsMethods.clickGoJovyCandy);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.view_project_jovyCandy, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.div_recurrent).on('click', domEl.view_project_jovyCandy, clickActionsMethods.clickGoJovyCandy);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_project_jovyCandy, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO SERVICES
    $(domEl.div_recurrent).on('click', domEl.view_blog_posicionamiento_web, clickActionsMethods.clickGoWebPosition);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_blog_posicionamiento_web, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.body_recurrent).on('click', domEl.view_blog_posicionamiento_web, clickActionsMethods.clickGoWebPosition);
    $(domEl.body_recurrent).on(Gumby.click, domEl.view_blog_posicionamiento_web, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    $(domEl.div_recurrent).on('click', domEl.view_blog_fotografia, clickActionsMethods.clickGoPhotography);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_blog_fotografia, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.body_recurrent).on('click', domEl.view_blog_fotografia, clickActionsMethods.clickGoPhotography);
    $(domEl.body_recurrent).on(Gumby.click, domEl.view_blog_fotografia, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    $(domEl.div_recurrent).on('click', domEl.view_blog_identidad_de_marca, clickActionsMethods.clickGoBrandIdentities);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_blog_identidad_de_marca, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.body_recurrent).on('click', domEl.view_blog_identidad_de_marca, clickActionsMethods.clickGoBrandIdentities);
    $(domEl.body_recurrent).on(Gumby.click, domEl.view_blog_identidad_de_marca, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    $(domEl.div_recurrent).on('click', domEl.view_blog_ads_google_bing_yahoo, clickActionsMethods.clickGoAds);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_blog_ads_google_bing_yahoo, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.body_recurrent).on('click', domEl.view_blog_ads_google_bing_yahoo, clickActionsMethods.clickGoAds);
    $(domEl.body_recurrent).on(Gumby.click, domEl.view_blog_ads_google_bing_yahoo, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    $(domEl.div_recurrent).on('click', domEl.view_blog_web_analytics, clickActionsMethods.clickGoAnalytics);
    $(domEl.div_recurrent).on(Gumby.click, domEl.view_blog_web_analytics, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
    $(domEl.body_recurrent).on('click', domEl.view_blog_web_analytics, clickActionsMethods.clickGoAnalytics);
    $(domEl.body_recurrent).on(Gumby.click, domEl.view_blog_web_analytics, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });

    // CLICK GO CONTACT
    $(domEl.div_recurrent_main_nav).on('click', domEl.go_contact, clickActionsMethods.clickGoContact);
    $(domEl.div_recurrent_main_nav).on(Gumby.click, domEl.go_contact, function(){
        $('.content #scrollarea').animate({scrollTop: 0}, 750);
    });
});