/* ----------------------------------- *\
 [Route] The Highway
\* ----------------------------------- */

Finch.route('/', {
    setup: function(bindings) {
        section = 'home';
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_smooth_scroll_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_home, domEl.div_recurrent);
        MED.loadTemplate(tempsNames.temp_section_home_slider, domEl.div_recurrent_home_slider);
        MED.loadTemplate(tempsNames.temp_section_portfolio, domEl.div_recurrent_portfolio);
        MED.loadTemplate(tempsNames.temp_section_projects, domEl.div_recurrent_begin_projects);
        MED.loadTemplate(tempsNames.temp_section_services, domEl.div_recurrent_services);
        MED.loadTemplate(tempsNames.temp_section_service_icons, domEl.div_recurrent_begin_services);

        //siteNavMethod.slickNav();
        matchMediaMethods.gumbyInit();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
    	MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/contacto', {
    setup: function(bindings) {
        section = 'contact';
        ga('send', 'pageview', '/contacto');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_contact, domEl.div_recurrent);

        //siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/aviso-de-privacidad', {
    setup: function(bindings) {
        section = 'privacy_notice';
        ga('send', 'pageview', '/aviso-de-privacidad');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_privacy_notice, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/aviso-legal', {
    setup: function(bindings) {
        section = 'legal_notice';
        ga('send', 'pageview', '/aviso-legal');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_legal_notice, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/proyectos', {
    setup: function(bindings) {
        section = 'projects';
        ga('send', 'pageview', '/proyectos');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_portfolio, domEl.div_recurrent);
        MED.loadTemplate(tempsNames.temp_section_filters_by_projects, domEl.div_recurrent_filters);
        MED.loadTemplate(tempsNames.temp_section_grid_filter_projects, domEl.div_recurrent_grid_filter_projects);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        filtersMethods.changeFilters();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/fussion-jeans', {
    setup: function(bindings) {
        section = 'fussion_jeans';
        ga('send', 'pageview', '/fussion-jeans');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_fussion_jeans, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/ford-cavsa', {
    setup: function(bindings) {
        section = 'ford_cavsa';
        ga('send', 'pageview', '/ford-cavsa');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_ford_cavsa, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/okuma-sushi', {
    setup: function(bindings) {
        section = 'okuma_sushi';
        ga('send', 'pageview', '/okuma-sushi');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_okuma_sushi, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/jovy-candy', {
    setup: function(bindings) {
        section = 'jovy_candy';
        ga('send', 'pageview', '/jovy-candy');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_jovy_candy, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/premium-by-jlr', {
    setup: function(bindings) {
        section = 'premium_by_jlr';
        ga('send', 'pageview', '/premium-by-jlr');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_premium_by_jlr, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/landrover-gdl', {
    setup: function(bindings) {
        section = 'landrover_gdl';
        ga('send', 'pageview', '/landrover-gdl');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_landrover_gdl, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/jaguar-gdl', {
    setup: function(bindings) {
        section = 'jaguar_gdl';
        ga('send', 'pageview', '/jaguar-gdl');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_has_child_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_project_jaguar_gdl, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
        switch_section_portfolio.section_porfolio();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/blog', {
    setup: function(bindings) {
        section = 'blog';
        ga('send', 'pageview', '/blog');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);

        MED.loadTemplate(tempsNames.temp_content_blog, domEl.div_recurrent);
        MED.loadTemplate(tempsNames.temp_content_notes, domEl.div_recurrent_blog);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/posicionamiento-web', {
    setup: function(bindings) {
        section = 'web_position';
        ga('send', 'pageview', '/posicionamiento-web');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_blog_posicionamiento_web, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recdiv_recurrent_main_navurren, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/fotografia', {
    setup: function(bindings) {
        section = 'photography';
        ga('send', 'pageview', '/fotografia');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_blog_fotografia, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recdiv_recurrent_main_navurren, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/identidad-de-marca', {
    setup: function(bindings) {
        section = 'brand_identities';
        ga('send', 'pageview', '/identidad-de-marca');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_blog_identidad_de_marca, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recdiv_recurrent_main_navurren, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/ads-google-bing-yahoo', {
    setup: function(bindings) {
        section = 'ads';
        ga('send', 'pageview', '/ads-google-bing-yahoo');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_blog_ads_google_bing_yahoo, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recdiv_recurrent_main_navurren, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});

Finch.route('/web-analytics', {
    setup: function(bindings) {
        section = 'web_analytics';
        ga('send', 'pageview', '/web-analytics');
    },
    load: function(bindings) {
        MED.loadTemplate(tempsNames.temp_site_nav, domEl.div_recurrent_main_nav);
        MED.loadTemplate(tempsNames.temp_content_blog_web_analytics, domEl.div_recurrent);

        siteNavMethod.slickNav();
        matchMediaMethods.contentScrollarea();
        animatedMethods.animated();
        matchMediaMethods.gumbyInit();
        slicknavMethods.add_slick_nav();
        slicknavMethods.header_fixed();
    },
    unload: function(bindings) {
        MED.setHTML(domEl.div_recurrent_main_nav, '');
        MED.setHTML(domEl.slicknav_menu, '');
        MED.setHTML(domEl.div_recurren, '');
    }
});


Finch.listen();
