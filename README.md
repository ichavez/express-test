# express-test

install bunyan globally :
```
npm install -g bunyan
```
Execute on a terminal:
```
node index.js | bunyan
```
On a different terminal send:

```
curl -X POST -d @books.xml -H "Content-Type: text/xml" http://localhost:1337/receive-xml
```
