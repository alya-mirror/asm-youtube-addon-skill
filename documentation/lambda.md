## Deploy the code into Lmabda

1-Go to [amazon management console](https://console.aws.amazon.com/console/home?region=us-east-1) and search for lambda 

<img width="1435" alt="1" src="https://user-images.githubusercontent.com/21360696/35481635-95213324-0427-11e8-8bf9-67046e190381.png">


2-Press on create function

<img width="1374" alt="2" src="https://user-images.githubusercontent.com/21360696/35481634-9506403c-0427-11e8-993f-b8d6560ea14a.png">


3-Name the function any name

for the role 'choose an existing role' then choose lambda basic_execution and then press on create function

<img width="1403" alt="3" src="https://user-images.githubusercontent.com/21360696/35481633-94e9cb1e-0427-11e8-96bb-6c182d195db5.png">


4-Go to code entry type and change it to upload zip file 

Zip the folder of this repository ( after you have added your certificates from aws iot to the certs folder)
And then upload it here

<img width="1382" alt="4" src="https://user-images.githubusercontent.com/21360696/35481632-94ce5d20-0427-11e8-91e3-0bfe2e4659f9.png">


5-Press on Alexa Skill Kit. Make the skill ID verification disabled and then press Add

<img width="1367" alt="5" src="https://user-images.githubusercontent.com/21360696/35481631-94b219f8-0427-11e8-96bd-4613caba4dcb.png">


6-Copy the ARN and keep it somewhere it will be needed later for configuring the skills

<img width="1423" alt="lambda arn" src="https://user-images.githubusercontent.com/21360696/35481638-b846e5ec-0427-11e8-990b-0733896eef81.png">
