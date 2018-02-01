## Alya Smart Mirror Youtube Skill
aws lambda function for handling multiple alexa custom skills and communicating with [asm-youtube](https://github.com/alya-smart-mirror/asm-youtube) using AWS-iot  gateway

## setup
You need to create [amazon developer account](https://www.amazon.com/ap/register?clientContext=132-4087873-5138427&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&siteState=clientContext%3D147-7667280-1228742%2CsourceUrl%3Dhttps%253A%252F%252Fdeveloper.amazon.com%252F%2Csignature%3DJBzIGEC6F5riKhIYjDe63xAfnGkj3D&marketPlaceId=ATVPDKIKX0DER&language=en_US&pageId=amzn_developer_portal&openid.return_to=https%3A%2F%2Fdeveloper.amazon.com%2F&prevRID=AQRCRPWJ1YQQVA81AK49&openid.assoc_handle=mas_dev_portal&openid.mode=checkid_setup&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0) if you don't have amazon account at all.

If you have amazon account go and login and complete the registration for a [developer amazon account](https://developer.amazon.com/registration/profile.html)

### 1.install dependencies
Using  `npm install`.
### 2.AWS-IOT
You have to register your device as a thing in the awsIot as in the steps [awsIOT registration](documentation/awsIOT.md).

### 3.Deploy the code into Lmabda
You have to deploy the repository code into aws lambda after you have already put the certificates files from the previous step to 'certs' folder [lambd](documentation/lambda.md).

### 4.Configuring the custom Skills
there are custom skills you have to configure you can find all the steps here [configuring the skills](documentation/skillConfiguration.md).
