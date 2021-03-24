import { allow } from '@toolz/allow';

export const getCookies = (convertDataTypes = true) => {
   allow.setFailureBehavior(allow.failureBehavior.WARN);
   allow.aBoolean(convertDataTypes);
   const cookies = {};
   const cookiesString = document.cookie || '';
   const pairs = cookiesString.split(';');
   pairs.forEach(pair => {
      let [key, value] = pair.split('=');
      key = key.trim();
      if (key === '')
         return;
      value = value.trim();
      if (convertDataTypes) {
         if (value.toLowerCase() === 'true')
            value = true;
         else if (value.toLowerCase() === 'false')
            value = false;
         else if (value.toLowerCase() === 'null')
            value = null;
         else if (!isNaN(Number(value)))
            value = parseFloat(value);
      }
      cookies[key.trim()] = value;
   });
   return cookies;
};
