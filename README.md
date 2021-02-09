
Clone the repo and use docker-compose to set things up. Run
```bash
git clone https://github.com/alfredkoncsag/ionic-vue-graphql-appsync.git

Copy the aws-exports.example.js file and make the required configuration changes in the aws-exports.js file

cp /src/aws-exports.example.js /src/aws-exports.js

cd ionic-vue-graphql-appsync
docker-compose up

```
and visit http://127.0.0.1:8100/ to enjoy the latest scaffold of the amazing vuejs ecosystem!

If you wish to build the image yourself instead of using mine, rename "docker-compose.yml.build" and replace "docker-compose.yml", and run ```docker-compose up```.

