# Financial Data Visualization WebApp
This project is a web application that allows users to upload financial data in CSV format, visualize the data through bar and pie charts, and dynamically display the chart by year. The application is built using Flask for the backend and React for the frontend.


# Prerequisites
To run this project, we will need:
1. Node.js and npm: For running the React frontend.
2. Python 3.12: For running the Flask backend.
3. pip: Python package manager to install Flask and other dependencies.

# Setup Instructions
1. Download the Repository
    ```console
    WebApp_Project.zip
    cd financial-app
    ```
2. Install Backend Dependencies:
Navigate to the Backend/ directory and install the required Python packages:
    ```console
    cd Backend
    pip install flask pandas flask-cors
    ```
3. Install Frontend Dependencies:
Navigate to the root directory (financial-app/) and install the Node.js dependencies:
   ```console
    npm install
   ```
4. Run the Backend, start the Flask server:
    ```console
    cd Backend
    python app.py
    ```
The server should start on http://127.0.0.1:5000.

5. Run the Frontend:
In a new terminal window, start the React application:
    ```console
    npm start
    ```
The React app should automatically open in your default browser at http://localhost:3000.

# Input Data
CSV File Structure: The application will accept the below file structure
columns: date, category, amount

# Using the Application
1.	Upload a CSV File: Click on the "Choose File" button, select a CSV file containing financial data, and upload it.
2.	View Charts: After uploading, the bar and pie charts will display the financial data.
3.	Select Year: Use the dropdown to select a different year, and the pie chart will update accordingly.

# Troubleshooting
1. CORS Issues - If you encounter Cross-Origin Resource Sharing (CORS) errors, ensure the Flask server has CORS enabled using the flask-cors package.
2. Module Not Found - Ensure all dependencies are installed using pip install for Python packages and npm install for Node.js packages.
3. Data Not Displaying - Ensure your CSV file is correctly formatted with the required columns. Check the console for any error messages.
