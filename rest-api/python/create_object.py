import json,httplib
connection = httplib.HTTPSConnection('api.parse.com', 443)
connection.connect()
connection.request('POST', '/1/classes/GameScore', json.dumps({
    "score": 1337,
    "playerName": "Test Jerry",
    "cheatMode": False
}), 
{
    "X-Parse-Application-Id": "App id",
    "X-Parse-REST-API-Key": "rest-api key",
    "Content-Type": "application/json"
})
results = json.loads(connection.getresponse().read())
print results
