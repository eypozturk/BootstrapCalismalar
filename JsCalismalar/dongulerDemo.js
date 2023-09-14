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


function kullaniciVarmi(email, sifre) {
    for (i = 0; i < kullanicilar.length; i++) {
        if (kullanicilar[i].email == email && kullanicilar[i].sifre == sifre) {
            return true;
        }
    }
    return false;
}

function giris() {
    if (kullaniciVarmi(email, sifre)) {
        alert("giriş başarılı")
    }
    else {
        alert("kullanıcı adı veya şifre hatalı")
    }
}

giris(email, sifre)
