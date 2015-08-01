import json,httplib
connection = httplib.HTTPSConnection('api.parse.com', 443)
connection.connect()
connection.request('POST', '/1/classes/GameScore', json.dumps({
    "score": 1337,
    "playerName": "Test Jerry",
    "cheatMode": False
}), 
{
    "X-Parse-Application-Id": "FRoRKIbR7WeMxj3s3jqT4kMycSz2R5yh4l8VxJdW",
    "X-Parse-REST-API-Key": "7VLGe5GRnVvhyKZ34Ci9dlLSnSVuJ2dYjv6qRYC5",
    "Content-Type": "application/json"
})
results = json.loads(connection.getresponse().read())
print results
