from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)
chart_data = None

@app.route('/upload', methods=['POST'])
def upload_file():    
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']   

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and file.filename.endswith('.csv'):
        df = pd.read_csv(file)
        
        # Process data
        chart_data = aggregate_data(df)
        
        return jsonify(chart_data), 200
    else:
        return jsonify({'error': 'Invalid file format, please upload a csv file'}), 400
    
def aggregate_data(df):
    df['Date'] = pd.to_datetime(df['Date'], dayfirst=True)
    df['Year'] = df['Date'].dt.year

    # Group by Year and Category and sum Amount
    grouped = df.groupby(['Year', 'Category'])['Amount'].sum().unstack(fill_value=0)

    # Convert to JSON-friendly format
    result = grouped.to_dict(orient='index')
    
    result = {year: dict(categories) for year, categories in result.items()} 

    return result

if __name__ == '__main__':
    app.run(debug=True)