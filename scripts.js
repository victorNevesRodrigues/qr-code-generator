const container = document.querySelector(".qrcodeContainer")
const button = document.querySelector(".generate")
const qrCode = document.querySelector(".qrcode")
const input = document.querySelector("input")
const qrImage = document.querySelector(".qrcode img")


function generateQR () {
    let qrValue = input.value
    if(!qrValue) return
    button.innerText = "Gerando QR Code..."
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImage.addEventListener("load", () => {
        container.classList.add("active")
        qrCode.classList.add("active")
        button.innerText = "Gerar outro QR Code"
    })
}


button.addEventListener("click", generateQR)