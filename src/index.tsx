function phoneNumberValidate(a: string): true | false {
  const regex_phone:RegExp = /^(05)([0-9]{2})\s?([0-9]{3})\s?([0-9]{2})\s?([0-9]{2})$/
  if(regex_phone.test(a)){
    return true
  }else{
    return false
  }
  
}

export default phoneNumberValidate;