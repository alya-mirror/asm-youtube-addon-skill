## Configuring the custom Skills

You have to create 7 custom skills
one is for searching for the videos
Others are just simple commands using Alexa invocation name as a command

<img width="1360" alt="main" src="https://user-images.githubusercontent.com/21360696/35481655-ebb8dc50-0427-11e8-9c6e-275bc6b3dc48.png">


### 1.search videos skill
1-Go to [Alexa skill](https://developer.amazon.com/alexa-skills-kit) and then press on start a skill

<img width="1406" alt="1" src="https://user-images.githubusercontent.com/21360696/35481648-cf882cc0-0427-11e8-94df-6c4236e1a7d5.png">


2-Name the skill any name you want and make the invocation name 'youtube'

<img width="1368" alt="2" src="https://user-images.githubusercontent.com/21360696/35481647-cf6dc380-0427-11e8-92c7-b5092e91fb99.png">


3-Copy the intent schema and the sample utterances from the interaction_model folder in this repository and then press save to build your model

<img width="1429" alt="3" src="https://user-images.githubusercontent.com/21360696/35481646-cf52f0fa-0427-11e8-87c6-2dff5410dbf8.png">


4-Copy the ARN you saved from lambda here

<img width="1320" alt="4" src="https://user-images.githubusercontent.com/21360696/35481645-cf37f7d2-0427-11e8-8966-050598148a8a.png">


Your skill is ready and you can test it !


### 2.The 6 commands
Each of these  6 commands are done the same way just change the invocation name in each

example of one of the command :
#### ⋅⋅* Go Next command
1-Name it any name and make the invocation name 'go next' ( for go next command )

<img width="1226" alt="1" src="https://user-images.githubusercontent.com/21360696/35481661-fe790478-0427-11e8-9b42-f4fd43db63f0.png">


2-go to the Launch Skill Builder in the interaction model and then press on Add in the Intents

<img width="1373" alt="2" src="https://user-images.githubusercontent.com/21360696/35481660-fe5d9a9e-0427-11e8-8d69-8dadfa179baf.png">


3-Add sample Intent just to make the skill build and work , for me I added simple help intent and then press on Build Model and wait few minutes 

<img width="1404" alt="3" src="https://user-images.githubusercontent.com/21360696/35481659-fe43844c-0427-11e8-812c-1afc18d49810.png">


4-Press on configuration and copy the same ARN you got from the lambda here ( the same ARN for all the skills you will create )


####  the invocation name for the other 5 commands


1-previous command : Go Previous

2-Choose the video command : This One

3-Pause the video command : Stop The Video

4-Resume the video command : Continue The Video

5-Close the video command : Close The Video
