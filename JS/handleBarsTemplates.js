function projectOneTemplates() {
    var source = document.getElementById("projectOneTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
        title: "Dunn's Country Store",
        projectLink: "https://github.com/Dannyp123/Dunns-Country-Store",
        languages: "HTML, CSS, Bootstrap",
        description: `This is a webpage that I would say is my first real webpage. I decided to see if I could
            make a webpage for my place of work. The reason why is because I needed the practice, there
            is not anything new online about the store I work at, and because I enjoy Front-end work.
            Hopefully, I can get it pushed on a real domain name.`,
    });
    document.querySelector('#projectOne').insertAdjacentHTML("beforeend", html)
}

function projectTwoTemplates() {
    var source = document.getElementById("projectTwoTemplate").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
        title: "Rental Agency",
        link: " https://github.com/Dannyp123/Daniel-Peterson-Web-Rental-Agency",
        langs: "HTML, CSS, JavaScript, Bootstrap, Handlebars",
        description: `This project is the Front-end final for my programming class. Using handlebar's templates I
        made a rental store that is like a real online one.`,
    });
    document.querySelector('#projectTwo').insertAdjacentHTML("beforeend", html)
}

projectOneTemplates()
projectTwoTemplates()