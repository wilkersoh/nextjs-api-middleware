# API Midleware Using next-connect

`yarn add next-connect`

# Open Insomnia
1. Check **nextjs-api-middleware**

if test agai, do you need generate token jwt in [jwt](https://jwt.io/)

PAYLOAD:
```json
{
  "sub": "1234567890",
  "name": "Wilker Soh",
  "userID": 1234
}
```

VERIFY SIGNATURE:
`laoyeche-secret`

Copy Encoded into insomnia Headers
key: Authorization
value: "EncodedValue"
