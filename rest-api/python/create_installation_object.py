import json,httplib
connection = httplib.HTTPSConnection('api.parse.com', 443)
connection.connect()
connection.request('POST', '/1/installations', json.dumps({
    "deviceType": "ios",
    "deviceToken": "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
    "channels": [
        ""
        ]
}), 
{
    "X-Parse-Application-Id": "App id",
    "X-Parse-REST-API-Key": "rest-api key",
    "Content-Type": "application/json"
})
result = json.loads(connection.getresponse().read())
print result
