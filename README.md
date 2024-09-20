# Reactfolio Personal Version

Welcome to the personal version of Reactfolio. This version extends the original capabilities of Reactfolio with additional features such as educational popups, integration with AWS DynamoDB, and deployment configurations for both AWS Lambda and Netlify.

Link: https://lianruisun.com/


## Features

- **Multi-Page Layout**: Includes Home, About, Projects, Articles, and Contact pages.
- **Responsive Design**: Ensures a seamless experience across all device sizes.
- **Education Popup**: New button to display education in an interactive format.
- **AWS DynamoDB Integration**: Direct connection to a DynamoDB table to fetch and display course information.
- **FastAPI on AWS Lambda**: Backend API built using FastAPI, hosted on AWS Lambda for high availability and performance.
- **Netlify Deployment**: Frontend deployed on Netlify with environment variables managed through `.env` for enhanced security.

## Getting Started

Reactfolio template and more instruction:
   https://github.com/truethari/reactfolio

### Prerequisites

You will need `Node.js` and `git` installed on your machine. Optionally, for deploying and testing the AWS and Netlify configurations, AWS CLI and Netlify CLI tools should be configured appropriately.

In the DynamoDB integration file, there are two methods available for connecting to DynamoDB:

1. useDynamoDBData.js: This method establishes a direct API connection to DynamoDB. However, since the API key is not publicly accessible, this function is not utilized in this context.

2. useFetchData.js: This method retrieves data using the AWS Lambda URL through FastAPI. For additional details about my FastAPI deployment, please visit: [My Portfolio FastAPI Deployment](https://github.com/LianruiSun/portfolio-fastAPI).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/LianruiSun/reactfolio.git

2. Navigate to the project directory:
   ```bash
   cd reactfolio-enhanced

3. Install the dependencies:
   ```bash
   npm install

4. Running Locally
   ```bash
   npm start
