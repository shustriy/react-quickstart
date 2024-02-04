#1. Create container 
- docker-compose build --no-cache
- docker-compose up 

#2. NPM install
- docker exec -it angular-tutorial-tests-web bash
- execute `./dev_install.sh`

##4. Run Container
- docker start angular-tutorial-tests-web && docker exec -it angular-tutorial-tests-web bash

## IMAGES
#Show all images
docker images -a

#Remove image
docker rmi Image Image

#Remove all images
docker rmi $(docker images -a -q)

## CONTAINERS
#Show all containers
docker ps -a

#Remove container
docker rm ID_or_Name ID_or_Name

#Remove all containers
docker rm $(docker ps -a -f status=exited -q)

https://github.com/DanWahlin/Angular-NodeJS-MongoDB-CustomersService/blob/master/src/docker-compose.yml

https://www.indellient.com/blog/how-to-dockerize-an-angular-application-with-nginx/#Writing-a-Dockerfile
# react-quickstart
