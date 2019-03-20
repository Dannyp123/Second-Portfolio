function aboutMeTemplate() {
    var source = document.getElementById("aboutMe").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
        body: `
        I enjoy learning new technologies and apply them to work well on a team. A few include: Python, HTML, CSS, JavaScript and Java. I look forward to becoming a front-end developer and working hard at a good company.
        I am also passionate for
        my learning and will
        not stop till I reach my
        goals.
        Therefore,
        I am confident in what my future holds.`,
        bccaLink: "https://basecampcodingacademy.org/about",
        quote: `"It is a very mean and nasty place and it will beat you to your knees and keep you
        there
        permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it
        ain't
        how hard you hit; it's about how hard you can get hit, and keep moving forward. How
        much
        you can take, and keep moving forward. That's how winning is done.'' - Rocky Balboa`
    });
    document.querySelector("#insertTemplateHere").insertAdjacentHTML("beforeend", html)
}
aboutMeTemplate()