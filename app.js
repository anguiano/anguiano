export default {
    name: 'Anguiano',
    data() {
        return {
            name: "Francisco Anguiano",
            menus: [
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
    template: `
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
                        <template v-for="menu in menus" key="menu.href">
                            <a href="{{ menu.href }}">
                                <span id="{{ menu.href }}" class="active"> {{ menu.label }} </span>
                            </a>
                        </template>
                    </div>
                </div>
            </nav>
            <div class="social">
                <a href="https://www.facebook.com" target="_blank" class="facebook">
                    <i class="fa fa-facebook"></i>
                </a>
            </div>
            <div class="copyright"> © {{ name }}.<br/>
                All Rights Reserved.
            </div>
        </div>
    </template>
    `
};