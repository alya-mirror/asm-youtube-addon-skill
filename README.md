## Alya Smart Mirror Youtube Skill
aws lambda function for handling multiple alexa custom skills and communicating with [asm-youtube] (https://github.com/alya-smart-mirror/asm-youtube) using AWS-iot  gateway

## setup
You need to create [amazon developer account](https://www.amazon.com/ap/register?clientContext=132-4087873-5138427&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&siteState=clientContext%3D147-7667280-1228742%2CsourceUrl%3Dhttps%253A%252F%252Fdeveloper.amazon.com%252F%2Csignature%3DJBzIGEC6F5riKhIYjDe63xAfnGkj3D&marketPlaceId=ATVPDKIKX0DER&language=en_US&pageId=amzn_developer_portal&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2F&prevRID=AQRCRPWJ1YQQVA81AK49&openid.assoc_handle=mas_dev_portal&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0) if you don't have amazon account at all

If you have amazon account go and login and complete the registration for an amazon account

### 1.install dependencies
Using  `npm install`
### 2.AWS-IOT
1.Go to [amazon management console] (https://console.aws.amazon.com/console/home?region=us-east-1) and search for AWS iot 

2.In the aws iot go to onboard and press get started on configuring a device then press get started again

3.Choose Linux/OSX and Nodejs 

4.Name it any name and then press next

5.download the certificates

6.unzip the folder and then go to terminal and run start.sh script, which will generate a root-CA.crt

7.Copy the highlighted files to 'certs' folder on this repository and in the 'certs' folder in [asm-youtube] (https://github.com/alya-smart-mirror/asm-youtube)

### 3.Deploy the code into Lmabda
1-Go to [amazon management console] (https://console.aws.amazon.com/console/home?region=us-east-1) and search for lambda 

2-Press on create function

3-Name the function any name

for the role 'choose an existing role' then choose lambda basic_execution and then press on create function

4-Go to code entry type and change it to upload zip file 

Zip the folder of this repository ( after you have added your certificates from aws iot to the certs folder)
And then upload it there

5-Press on Alexa Skill Kit. Make the skill ID verification disabled and then press Add

6-Copy the ARN and keep it somewhere it will be needed later for configuring the skills
### 4.Configuring the custom Skills
You have to create 7 custom skills
one is for searching for the videos
Others are just simple commands using Alexa invocation name as a command
#### 1.search videos skill
1-Go to [Alexa skill] (https://developer.amazon.com/alexa-skills-kit) and then press on start a skill

2-Name the skill any name you want and make the invocation name 'youtube'

3-Copy the intent schema and the sample utterances from the file and then press save to build your model

4-Copy the ARN you saved from lambda here

Your skill is ready and you can test it

#### 2.The other 6 commands
Each of these commands are done the same way just change the invocation name in each
##### 1.Go Next command
1-Name it any name and make the invocation name 'go next' ( for go next command )

2-go to the Launch Skill Builder in the interaction model and then press on Add in the Intents

3-Add sample Intent just to make the skill build and work , for me I added simple help intent and then press on Build Model and wait few minutes 

4-Press on configuration and copy the same ARN you got from the lambda here ( the same ARN for all the skills you will create )

##### 2.For all other commands 

do the same as in the go next command just change the invocation name as follows

1-previous command : Go Previous

2-Choose the video command : This One

3-Pause the video command : Stop The Video

4-Resume the video command : Continue The Video

5-Close the video command : Close The Video
