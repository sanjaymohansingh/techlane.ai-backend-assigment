# techlane.ai-backend-assigment

This repository contains the backend server and a Python script for generating mock AI predictions for an AI product's dashboard. The backend is built using Node.js with Express, and it provides API endpoints for fetching mock AI metrics and predictions data.

## Features

- Set up a Node.js server using Express to serve as the backend for the AI product's dashboard.
- Create API endpoints to handle fetching mock AI model metrics data and simulated AI predictions for data visualization.
- Implement data storage using JSON files to store and retrieve AI metrics and prediction data.
- Ensure proper error handling and validation for API requests.

## Getting Started

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/sanjaymohansingh/techlane.ai-backend-assigment.git
   cd ai-dashboard-backend

# Install Dependencies:

Install the required Node.js packages using npm.

**npm install**

# Run the Server:

Start the Node.js server using the following command:

# node server.js
The server will be accessible at http://localhost:5000.

# API Endpoints

/api/metrics: Fetch mock AI model metrics data (accuracy, precision, recall, etc.) in JSON format.
/api/predictions: Fetch simulated AI predictions and actual results for data visualization.

# Python Script for Mock Predictions
The predictions.py Python script generates mock AI predictions along with actual results. The Node.js server integrates this script to provide prediction data for the /api/predictions endpoint.

# Important Notes
This is a simplified example for educational purposes.
Ensure that both Node.js and Python are installed on your system.
Mock data is used for demonstration; replace it with real data for a production scenario.
Additional error handling, security measures, and data storage (such as a database) should be considered for a production-ready application.
