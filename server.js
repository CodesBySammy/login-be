const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Predefined users (50 users for demonstration)
const users = [
  { id: 'sameer', password: 'sameer' },
  { id: 'parth', password: 'parth' },
  { id: 'prassan', password: 'prassan' },
  // Add more users here up to user50
];

// Endpoint for login
app.post('/login', (req, res) => {
  const { id, password } = req.body;
  const user = users.find(user => user.id === id && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.json({ success: false, message: 'Invalid credentials!' });
  }
});

// Serve the static HTML/CSS files
app.use(express.static('public'));

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
