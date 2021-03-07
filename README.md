# get-cookies

`get-cookies` is a utility function that parses cookies into an object. Its default behavior will also attempt to convert cookie values into their "logical" data types.

## Usage

After installation, import the package:

```javascript
import { getCookies } from '@toolz/get-cookies';
```

### getCookies()

The function returns an object containing any existing cookie values and attempts to convert those values into native JS data types.

```javascript
const API = {
   arguments: {
      convertDataTypes: {
         optional,
         format: Boolean,
         defaultValue: true,
      },
   },
   returns: Object,
}
```

**Examples:**

```javascript
// document.cookies = 'isKool=true; name=mary; pi=3.14; children=null; age=42'
const cookies = getCookies();
/*
   cookies = {
      isKool: true,
      name: 'mary',
      pi: 3.14,
      children: null,
      age: 42,
   }
 */
```

```javascript
// document.cookies = 'isKool=true; name=mary; pi=3.14; children=null; age=42'
const cookies = getCookies(false);
/*
   cookies = {
      isKool: 'true',
      name: 'mary',
      pi: '3.14',
      children: 'null',
      age: '42',
   }
 */
```
