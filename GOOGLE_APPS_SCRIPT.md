# Google Apps Script Webhook Setup for Nurexa Digital Solutions

Follow these steps to set up the Google Apps Script webhook to receive new client form submissions into a Google Sheet on your Google Drive.

## Step 1: Create a Google Sheet
1. Go to your Nurexa Google Drive.
2. Create a new Google Sheet.
3. Name it "Nurexa New Clients" (or any preferred name).
4. In the first row, add the following headers EXACTLY in this order:
   - Timestamp
   - Name
   - Company
   - Job Title
   - Email
   - Phone
   - Country
   - City
   - Website
   - Industry
   - Company Size
   - Employees Count
   - Products
   - Target Audience
   - Business Type
   - Channels
   - Agent Goals
   - Language
   - Tone
   - Working Hours
   - Is 24/7
   - Data Sources
   - Integrations
   - Scenarios
   - Restrictions
   - Policies
   - Expected Customers
   - Expected Chats
   - Expected Calls
   - Avg Call Duration
   - Team Size

## Step 2: Open Apps Script
1. In the Google Sheet menu, go to **Extensions > Apps Script**.
2. Delete the default code in `Code.gs`.
3. Paste the following code:

```javascript
// doPost is a reserved function name in Apps Script that handles HTTP POST requests
function doPost(e) {
  try {
    // Get the active sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON payload
    var data = JSON.parse(e.postData.contents);
    
    // Create a row array based on the incoming data
    var rowData = [
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.company || '',
      data.jobTitle || '',
      data.email || '',
      data.phone || '',
      data.country || '',
      Array.isArray(data.cities) ? data.cities.join(', ') : data.city || '',
      data.website || '',
      data.industry || '',
      data.companySize || '',
      data.employeesCount || '',
      data.products || '',
      data.targetAudience || '',
      data.businessType || '',
      Array.isArray(data.channels) ? data.channels.join(', ') : '',
      Array.isArray(data.agentGoals) ? data.agentGoals.join(', ') : '',
      data.language || '',
      data.tone || '',
      data.workingHours || '',
      data.is247 || '',
      Array.isArray(data.dataSources) ? data.dataSources.join(', ') : '',
      Array.isArray(data.integrations) ? data.integrations.join(', ') : '',
      data.scenarios || '',
      data.restrictions || '',
      data.policies || '',
      data.expectedCustomers || '',
      data.expectedChats || '',
      data.expectedCalls || '',
      data.avgCallDuration || '',
      data.teamSize || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Add CORS headers support for preflight requests if needed
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
```

## Step 3: Deploy as Web App
1. Click the **Deploy** button in the top right corner and select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Description: "Nurexa Form Webhook"
4. Execute as: **Me** (your Google account)
5. Who has access: **Anyone** (This is important so the website can send data to it without authentication)
6. Click **Deploy**.
7. Authorize access if prompted (you may need to click "Advanced" and "Go to project (unsafe)" during authorization).
8. Copy the **Web app URL** generated at the end.

## Step 4: Add to Environment Variables
Take the Web app URL you copied and add it to your `.env` or AI Studio settings under the key:
`VITE_GOOGLE_APPS_SCRIPT_WEBHOOK_URL`
