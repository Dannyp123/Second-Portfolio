function aboutMeTemplate() {
    var source = document.getElementById("aboutMe").innerHTML;
    var template = Handlebars.compile(source);
    var html = template({
        body: `
        I was born in Oxford M.S. and was raised in Water
        Valley, M.S which is where I graduated high
    school from. I was
    8th
    in my graduating class
    with a GPA of 3.89. I was nominated to Base Camp by my teacher, Micheal Howland, who played a
    roll
    in
    my success in High School. I was accepted into both North West Community College and Holms
    Community College, but Base Camp was the closest to home.
        went to school with a few Base Camp graduates. For
        example, Keegan
        Faustin,
        Milttreonna Owens, Nicole Shelton, and Jacob Spence. They are another reason I choose to
        further my
        education
        at Base Camp. Although, I never had that much interest in computers before Base Camp. It was
        not until I looked up and seen what Computer Science and programming was and that was when I
        decided to pursue this feild and set my goals. With that being said, I am also passionate for
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