var kullanicilar = [
    { email: "eyupozturk", sifre: "12345" },
    { email: "beyzaozturk", sifre: "12345" }
]

var tivitler = [
    { email: "eyupozturk", tivit: "hava güzel" },
    { email: "eyupozturk", tivit: "baya güzel" },
    { email: "beyzaozturk", tivit: "monttum çok iyii abi yaa" }
]

var email = prompt("email?")
var sifre = prompt("şifre?")

function giris() {
    if ((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
        (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)) {
            console.log(tivitler)
    }
    else{
        alert("kullanıcı adı veya şifre hatalı")
    }
}

giris(email,sifre)
