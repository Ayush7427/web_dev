function  otp() {
    let OTP =''
    for(let i = 1; i <= 6; i++){
        OTP += Math.floor(Math.random() * 10)
    }
    return OTP
}
console.log(otp());