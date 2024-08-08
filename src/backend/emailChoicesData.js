import { getAPI } from "./api";
import { obfuscateEmail } from "./expression";

export const emailChoicesData = async (custName,hkID,emailLogin) => {
    var settings = [];
    var custname = custName;
    var hkid = hkID;
    var email_login = emailLogin;
    var email_contact = '';
    var emailLogin_subString = '';
    var emailContact_subString = '';
    const url = `http://61.244.92.135/php/auth.php?auth_type=login_forgot_get_email&custname=${custname}&hkid=${hkid}&email_login=${email_login}`;
    const res = await getAPI(url);
  
    email_login = res.email_login;
    try  {emailLogin_subString = obfuscateEmail(email_login); }catch(error){} 
  
    email_contact = res.email_contact;
    try { emailContact_subString = obfuscateEmail(email_contact);}catch(error){}
  
    if (email_contact === "") {
        settings = [
          { name: '登入電郵', description: '*****' + emailLogin_subString }
        ];
    } else {
        settings = [
          { name: '登入電郵', description: '*****' + emailLogin_subString },
          { name: '通訊電郵', description: '*****' + emailContact_subString }
        ];
    }
  
    return settings;
  };
  