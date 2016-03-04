$(document).ready(function() {

    var responsiveNavTabs2Bar = function() {
        if ($(window).width() >= 768) {
            $('.responsive-nav-tabs2bar>nav.navbar').removeClass('navbar-default');
            $('.responsive-nav-tabs2bar>nav.navbar>.container-fluid>.navbar-header').hide();
            $('.responsive-nav-tabs2bar>nav.navbar>.container-fluid>.navbar-collapse>.nav').removeClass('navbar-nav').addClass('nav-tabs');
        }
        else {
            $('.responsive-nav-tabs2bar>nav.navbar').addClass('navbar-default');
            $('.responsive-nav-tabs2bar>nav.navbar>.container-fluid>.navbar-header').show();
            $('.responsive-nav-tabs2bar>nav.navbar>.container-fluid>.navbar-collapse>.nav').removeClass('nav-tabs').addClass('navbar-nav');
        }
    }

    var responsiveNavPills2Bar = function() {
        if ($(window).width() >= 768) {
            $('.responsive-nav-pills2bar>nav.navbar').removeClass('navbar-default');
            $('.responsive-nav-pills2bar>nav.navbar>.container-fluid>.navbar-header').hide();
            $('.responsive-nav-pills2bar>nav.navbar>.container-fluid>.navbar-collapse>.nav').removeClass('navbar-nav').addClass('nav-pills');
        }
        else {
            $('.responsive-nav-pills2bar>nav.navbar').addClass('navbar-default');
            $('.responsive-nav-pills2bar>nav.navbar>.container-fluid>.navbar-header').show();
            $('.responsive-nav-pills2bar>nav.navbar>.container-fluid>.navbar-collapse>.nav').removeClass('nav-pills').addClass('navbar-nav');
        }
    }

    $(window).resize(function() {
        responsiveNavTabs2Bar();
        responsiveNavPills2Bar();
    });
    responsiveNavTabs2Bar();
    responsiveNavPills2Bar();
  });