function  otp() {
    let OTP =''
    let x ='/*7891#'
    for(let i = 0; i <= 6; i++){
        OTP += x[Math.floor(Math.random() * 6)]
    }
    return OTP
}
console.log(otp());