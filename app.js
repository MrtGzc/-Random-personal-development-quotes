const change = document.querySelector(".change");
const body = document.querySelector("body");
const quatoContent = document.querySelector(".quato-content")
const quatoAuthor = document.querySelector(".queto-author")
const add = document.querySelector(".add")

change.addEventListener("click",clickForChange)


const colors = [
    "#F67280",
    "#355C7D",
    "#79A7A8",
    "#5E1742",
    "#00A7FF",
    "#E0ACF6",
    "#4BA47E",
    "#F8B500",
    "#00A388",
    "#AAB9E8",
    "#DA727E",
    "#8F1D2C",
    "#068587",
    "#00A388"
]

const contents = [
    {
        content: "Hayra vesile olan, hayrı yapan gibidir.",
        author: "Hz. Muhammed"
    },
    {
        content: "Başarının yolu, konuşmayı bırakmak ve yapmaya başlamaktır.",
        author: "Walt Disney"
    },
    {
        content: "Sadece büyük ölçüde başarısız olmaya cesaret edenler büyük ölçüde başarabilirler.",
        author: "Robert F. Kennedy"
    },
    {
        content: " Başarının sırlarından biri, geçici başarısızlıkların bizi yenmesine izin vermemektir.",
        author: "Ziya Gökalp"
    },
    {
        content: "Bir yenilik yaptığınız zaman, insanların size deli gözüyle bakmasına hazır olun.",
        author: "Oracle Kurucu Ortak, Larry Ellison"
    },
    {
        content: " Hayat kırılgandır. Yarının bir garantisi yok, bu yüzden sahip olduğunuz her şeyi kullanın.",
        author: "Apple CEO, Tim Cook"
    },
    {
        content: "Eğer sevdiğiniz ve tutkunu olduğunuz bir şeyi yapıyorsanız, her şeyin nasıl işleyeceğini gösteren büyük bir plana ihtiyacınız yoktur.",
        author: "Facebook Kurucu Ortak, Mark Zuckerberg"
    },
    {
        content: "Şuna gerçekten inanıyorum ki, başarılı girişimcileri başarısız girişimcilerden ayıran şey sadece azimdir.",
        author: "Apple Kurucu Ortak, Steve Jobs"
    },
    {
        content: "Başarılı olmak için, bir dahi ya da bir hayalci, hatta bir üniversite mezunu olmak dahi gerekmez. İhtiyacınız olan tek şey bir taslak ve bir hayaldir.",
        author: "DELL CEO, Michael Dell"
    },
]

function clickForChange(){
    const number = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[number]

    const contentNumber = Math.floor(Math.random()*contents.length)
    quatoContent.innerHTML = contents[contentNumber].content;
    quatoAuthor.innerHTML = contents[contentNumber].author;
}

function shareOnTwitter() {
    var text = quatoContent.innerHTML;
    var author = quatoAuthor.innerHTML;
    window.location.href = 'https://twitter.com/intent/tweet?text=' + text + " - " + author;
}

