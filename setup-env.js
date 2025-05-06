import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `VITE_GOOGLE_SHEETS_SCRIPT=https://script.google.com/macros/s/AKfycbyfbh40VFHv1DG3H5-1vFOA7_ZgSV4skPY_r2JwK_h6KQ_c_GVTyV1c13_Cwnp8o_-osA/exec
`;

const envPath = path.join(__dirname, '.env');

// Check if .env file already exists
if (fs.existsSync(envPath)) {
  console.log('.env file already exists. To update it, please modify it manually or delete it first.');
} else {
  // Create the .env file
  try {
    fs.writeFileSync(envPath, envContent);
    console.log('.env file created successfully!');
  } catch (error) {
    console.error('Error creating .env file:', error);
  }
} 