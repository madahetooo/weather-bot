# netways-weather-bot-task
### Describtion
This is a chatbot for getting the weather degree.
This bot has been created using [Bot Framework](https://dev.botframework.com), it shows how to create a simple bot that accepts input from the user and echoes it back.
Firstly, I started searching for what is the Microsoft Bot Framework and how to use it, Then downloaded the Prerequisites to be able to start working on the task.

## Prerequisites
- [ASP.NET Core Runtime 3.1](https://dotnet.microsoft.com/download)
- [Microsoft Visual Studio 2019 for Mac.](https://visualstudio.microsoft.com/vs/mac/)
- [Microsoft Bot Emulator.](https://github.com/microsoft/BotFramework-Emulator/blob/master/README.md)
- [Bot Framework v4 SDK Templates for Visual Studio](https://marketplace.visualstudio.com/items?itemName=BotBuilder.botbuilderv4)
- [Node.js](https://nodejs.org) version 10.14.1 or higher

    ```bash
    # determine node version
    node --version
    ```

## To run the bot i faced some troubles because of my mac:
- After downloading the VS and the botBuilder VSIXV4.vsix file, i couldn't install it because this extention not supported on macOS.
- So i downloaded a sample code locally to open it with VS to test and try the emulator and it works fine, but still cannot see the " Create Echo Bot" template from the starting new project panel, to be able to start from scartch as shown below.


<img width="800" height="400" alt="Screen Shot 2021-05-25 at 8 15 44 PM" src="https://user-images.githubusercontent.com/28203059/119680615-a37d9480-be41-11eb-9ce4-2d328c3d126c.png">

<img width="600" height="400" alt="Screen Shot 2021-05-26 at 4 20 14 PM" src="https://user-images.githubusercontent.com/28203059/119676909-8b584600-be3e-11eb-8a55-377287fd2bd0.png">


- So I switched the work from C# to JavaScript to be able to create the project from the scartch and save time for the task delivery.
- So,I started with installing the Yeoman generator for Bot Framework v4. It Will let me quickly set up a conversational AI bot using core AI capabilities.

    ```bash
    npm install -g yo
    ```
    ```bash
    npm install -g generator-botbuilder
    ```
    
     
- Choose "Echo Bot " Template and used the core bot features " Send and Receive Messages".
- Create a New Project  
    ```bash
    yo botbuilder
    ```
    
- Install modules

    ```bash
    npm install
    ```
    
- Start the bot

    ```bash
    npm start
    ```
### And Here we go!
 <img width="1440" alt="Screen Shot 2021-05-26 at 12 08 11 AM" src="https://user-images.githubusercontent.com/28203059/119681048-053dfe80-be42-11eb-97d7-2316a77f4ac6.png">




### Connect to the bot using Bot Framework Emulator

- Launch Bot Framework Emulator
- Enter a Bot URL of `http://localhost:3978/api/messages`
- Then i followed the task requirements turns, until here and the bot works locally fine.
<img width="1399" alt="Screen Shot 2021-05-26 at 12 15 40 AM" src="https://user-images.githubusercontent.com/28203059/119681203-243c9080-be42-11eb-90ad-b51c2a2bd482.png">


## Deploy the bot to Azure

when it come to deploying a bot to Azure, i used this docs [Deploy your bot to Azure](https://aka.ms/azuredeployment) for a complete the list of deployment instructions.
I started with pushing the project to Github without the node_modules by adding it to the .gitignore file.
- First I make a subscription to Microsoft Azure.
- Downloaded the latest version of Azure CLI.
But while following the instructions, I faced this error while deploying:
<img width="635" alt="Screen Shot 2021-05-26 at 4 54 01 PM" src="https://user-images.githubusercontent.com/28203059/119682213-fefc5200-be42-11eb-910c-b00c5b87f9ab.png">


After doing a research on this [issue](https://github.com/Azure/azure-quickstart-templates/issues/7302), i followed a tutorial to solve it manually by adding: 
- Azure Extension on VSC and connect it with Github repo.
- Join Microsoft Azure dashboard.
- Create a Resource Group for the bot.
- Create an App service plan.
- Create a New Bot Web APP.
<img width="1440" alt="Screen Shot 2021-05-26 at 4 11 54 PM" src="https://user-images.githubusercontent.com/28203059/119683470-f6f0e200-be43-11eb-925a-fb6fa9dc4a72.png">



- Also made an Azure Pipeline.
<img width="1000" alt="Screen Shot 2021-05-26 at 4 09 51 PM" src="https://user-images.githubusercontent.com/28203059/119683699-26075380-be44-11eb-86ea-32cb64f1da92.png">




- And its Done.
<img width="1000" alt="Screen Shot 2021-05-26 at 3 51 52 PM" src="https://user-images.githubusercontent.com/28203059/119683872-53540180-be44-11eb-830f-0a71f4196567.png">





- From the "Channel" Integration end point, I choosed WEB APP, and added the iframe to my personal website for example.
<img width="1000" alt="Screen Shot 2021-05-26 at 3 53 38 PM" src="https://user-images.githubusercontent.com/28203059/119684342-b9408900-be44-11eb-9da7-3b3cf7347be9.png">

## References i used

- [Bot Framework Documentation](https://docs.botframework.com)
- [Bot Basics](https://docs.microsoft.com/azure/bot-service/bot-builder-basics?view=azure-bot-service-4.0)
- [Azure Bot Service Introduction](https://docs.microsoft.com/azure/bot-service/bot-service-overview-introduction?view=azure-bot-service-4.0)
- [Azure Bot Service Documentation](https://docs.microsoft.com/azure/bot-service/?view=azure-bot-service-4.0)
- [Azure CLI](https://docs.microsoft.com/cli/azure/?view=azure-cli-latest)
- [Azure Portal](https://portal.azure.com)
- [Channels and Bot Connector Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-concepts?view=azure-bot-service-4.0)
- [Restify](https://www.npmjs.com/package/restify)
