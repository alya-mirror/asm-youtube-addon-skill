## Alya Smart Mirror Youtube Skill
aws lambda function for handling multiple alexa custom skills and communicating with [asm-youtube] (https://github.com/alya-smart-mirror/asm-youtube) using AWS-iot  gateway

## setup
You need to create [amazon developer account](https://www.amazon.com/ap/register?clientContext=132-4087873-5138427&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&siteState=clientContext%3D147-7667280-1228742%2CsourceUrl%3Dhttps%253A%252F%252Fdeveloper.amazon.com%252F%2Csignature%3DJBzIGEC6F5riKhIYjDe63xAfnGkj3D&marketPlaceId=ATVPDKIKX0DER&language=en_US&pageId=amzn_developer_portal&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2F&prevRID=AQRCRPWJ1YQQVA81AK49&openid.assoc_handle=mas_dev_portal&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0) if you don't have amazon account at all

If you have amazon account go and login and complete the registration for an amazon account

### 1.install dependencies
Using  `npm install`
### 2.AWS-IOT

1.Go to [amazon management console](https://console.aws.amazon.com/console/home?region=us-east-1) and search for AWS iot 

<img width="1439" alt="aws iot" src="https://user-images.githubusercontent.com/21360696/35481578-cde0f376-0426-11e8-88cd-cfa6c485a5c0.png">


2.In the aws iot go to onboard and press get started on configuring a device then press get started again

<img width="1424" alt="aws iot 2" src="https://user-images.githubusercontent.com/21360696/35481605-26ba3480-0427-11e8-8a58-fa417ea876eb.png">


3.Choose Linux/OSX and Nodejs 

<img width="1435" alt="aws-iot2" src="https://user-images.githubusercontent.com/21360696/35481584-e81fadd6-0426-11e8-9d83-3279184479f9.png">


4.Name it any name and then press next

<img width="1401" alt="aws-iot3" src="https://user-images.githubusercontent.com/21360696/35481586-edc077e8-0426-11e8-97ff-f1201ebce807.png">


5.download the certificates

<img width="1403" alt="5" src="https://user-images.githubusercontent.com/21360696/35481608-326570a6-0427-11e8-9c5e-9c5cbcce64fb.png">


6.unzip the folder and then go to terminal and run start.sh script, which will generate a root-CA.crt

<img width="1425" alt="6" src="https://user-images.githubusercontent.com/21360696/35481609-379ea312-0427-11e8-91d9-9e4caf5eb39a.png">

<img width="761" alt="7" src="https://user-images.githubusercontent.com/21360696/35481613-46a19dba-0427-11e8-844e-c91bea06df81.png">


7.Copy the highlighted files to 'certs' folder on this repository and in the 'certs' folder in [asm-youtube](https://github.com/alya-smart-mirror/asm-youtube)

### 3.Deploy the code into Lmabda
1-Go to [amazon management console](https://console.aws.amazon.com/console/home?region=us-east-1) and search for lambda 

<img width="1435" alt="1" src="https://user-images.githubusercontent.com/21360696/35481635-95213324-0427-11e8-8bf9-67046e190381.png">


2-Press on create function

<img width="1374" alt="2" src="https://user-images.githubusercontent.com/21360696/35481634-9506403c-0427-11e8-993f-b8d6560ea14a.png">


3-Name the function any name

<img width="1403" alt="3" src="https://user-images.githubusercontent.com/21360696/35481633-94e9cb1e-0427-11e8-96bb-6c182d195db5.png">


for the role 'choose an existing role' then choose lambda basic_execution and then press on create function

4-Go to code entry type and change it to upload zip file 


<img width="1382" alt="4" src="https://user-images.githubusercontent.com/21360696/35481632-94ce5d20-0427-11e8-91e3-0bfe2e4659f9.png">

Zip the folder of this repository ( after you have added your certificates from aws iot to the certs folder)
And then upload it there

5-Press on Alexa Skill Kit. Make the skill ID verification disabled and then press Add

<img width="1367" alt="5" src="https://user-images.githubusercontent.com/21360696/35481631-94b219f8-0427-11e8-96bd-4613caba4dcb.png">


6-Copy the ARN and keep it somewhere it will be needed later for configuring the skills

<img width="1423" alt="lambda arn" src="https://user-images.githubusercontent.com/21360696/35481638-b846e5ec-0427-11e8-990b-0733896eef81.png">


### 4.Configuring the custom Skills
You have to create 7 custom skills
one is for searching for the videos
Others are just simple commands using Alexa invocation name as a command

<img width="1360" alt="main" src="https://user-images.githubusercontent.com/21360696/35481655-ebb8dc50-0427-11e8-9c6e-275bc6b3dc48.png">


#### 1.search videos skill
1-Go to [Alexa skill](https://developer.amazon.com/alexa-skills-kit) and then press on start a skill

<img width="1406" alt="1" src="https://user-images.githubusercontent.com/21360696/35481648-cf882cc0-0427-11e8-94df-6c4236e1a7d5.png">


2-Name the skill any name you want and make the invocation name 'youtube'

<img width="1368" alt="2" src="https://user-images.githubusercontent.com/21360696/35481647-cf6dc380-0427-11e8-92c7-b5092e91fb99.png">


3-Copy the intent schema and the sample utterances from the file and then press save to build your model

<img width="1429" alt="3" src="https://user-images.githubusercontent.com/21360696/35481646-cf52f0fa-0427-11e8-87c6-2dff5410dbf8.png">


4-Copy the ARN you saved from lambda here

<img width="1320" alt="4" src="https://user-images.githubusercontent.com/21360696/35481645-cf37f7d2-0427-11e8-8966-050598148a8a.png">


Your skill is ready and you can test it

#### 2.The other 6 commands
Each of these commands are done the same way just change the invocation name in each
##### 1.Go Next command
1-Name it any name and make the invocation name 'go next' ( for go next command )

<img width="1226" alt="1" src="https://user-images.githubusercontent.com/21360696/35481661-fe790478-0427-11e8-9b42-f4fd43db63f0.png">


2-go to the Launch Skill Builder in the interaction model and then press on Add in the Intents

<img width="1373" alt="2" src="https://user-images.githubusercontent.com/21360696/35481660-fe5d9a9e-0427-11e8-8d69-8dadfa179baf.png">


3-Add sample Intent just to make the skill build and work , for me I added simple help intent and then press on Build Model and wait few minutes 

4-Press on configuration and copy the same ARN you got from the lambda here ( the same ARN for all the skills you will create )

<img width="1404" alt="3" src="https://user-images.githubusercontent.com/21360696/35481659-fe43844c-0427-11e8-812c-1afc18d49810.png">


##### 2.For all other commands 

do the same as in the go next command just change the invocation name as follows

1-previous command : Go Previous

2-Choose the video command : This One

3-Pause the video command : Stop The Video

4-Resume the video command : Continue The Video

5-Close the video command : Close The Video
