<template>
    <div id="container" class="container">    
        <div class="logo"> 
            <img src="images/logo.png" alt="" width="140" height="140" />
            <span> {{ name }} </span>
        </div>
        <a href="#menu1" class="menu-link"></a> 
        <nav id="menu1" role="navigation" style="overflow: hidden; padding: 0px; width: 200px;">
            <div class="jspContainer" style="width: 200px; height: 398px;">
                <div class="jspPane" style="padding: 0px; top: 0px; width: 200px;">
                    <template v-for="nav in navigation">
                        <a href="`#${nav.href}`">
                            <span id="`link_${nav.href}`" class="active"> {{ nav.label }} </span>
                        </a>
                    </template>
                </div>
            </div>
        </nav>
        <div class="social">
            <a href="https://www.facebook.com" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a> <a href="https://twitter.com" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a> <a href="https://plus.google.com" target="_blank" class="google-plus"><i class="fa fa-google-plus"></i></a> </div>
        <div class="copyright"> © {{ name }}.<br/>
            All Rights Reserved.
        </div>
    </div>
</template>

export default {
    name: 'Anguiano',
    data() {
        return {
            name: "Francisco Anguiano",
            navigation: [
                {href: "introduction", label: "Home"},
                {href: "about", label: "About"},
                {href: "skills", label: "Skills"},
                {href: "experience", label: "Experience"},
                {href: "education", label: "Education"},
                {href: "portfolio", label: "Portfolio"},
                {href: "contact", label: "Contact"},
                {href: "blog", label: "Blog"},
            ],
        };
    },
};