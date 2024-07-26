function hidePhone(phoneNumber) {
  if (typeof phoneNumber !== "string" || phoneNumber.length < 2) {
    return "Invalid phone number";
  }

  let lastDigitIndex = phoneNumber.length - 1;

  let hiddenPhone = phoneNumber.substring(0, lastDigitIndex - 1) + "xx";

  return hiddenPhone;
}

let phone = "+996 123 456 789";
console.log(hidePhone(phone));

let invalidPhone = "+996 134";
console.log(hidePhone(invalidPhone));

function myReverse(str) {
  if (typeof str !== "string") {
    return "Invalid input";
  }

  let reversedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

let originalStr = "123456789";
console.log(myReverse(originalStr));
