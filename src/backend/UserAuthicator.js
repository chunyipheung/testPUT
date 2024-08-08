const now = new Date();

const adjustedDate = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  now.getHours(),
  now.getMinutes(),
  0, //now.getSeconds(),
  0  //now.getMilliseconds()
);

const unixTimestamp = Math.floor(adjustedDate.getTime() / 1000);




const generateRandomNumber = () => {
    let randomNumber = '';
    for (let i = 0; i < 7; i++) {
      const digit = Math.floor(Math.random() * 9) + 1;
      randomNumber += digit;
    }
    return randomNumber;
};



const extractRelatedNumbers = (source, pattern) => {
    const sourceStr = source.toString();
    const patternStr = pattern.toString();
  
    let result = '';
    for (let i = 0; i < patternStr.length; i++) {
      const position = parseInt(patternStr[i], 10); 
      if (position >= 1 && position <= sourceStr.length) {
        result += sourceStr[sourceStr.length - position]; 
      } else {
        result += '0'; 
      }
    }
  
    return result;
  };

export const ruler = generateRandomNumber();
export const playerAns = extractRelatedNumbers(unixTimestamp,ruler);
export const UFKey = unixTimestamp;
