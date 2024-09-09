const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Predefined users (50 users for demonstration)
const users = [
  { "id": "user1", "password": "password1" },
  { "id": "user2", "password": "password2" },
  { "id": "user3", "password": "password3" },
  { "id": "user4", "password": "password4" },
  { "id": "user5", "password": "password5" },
  { "id": "user6", "password": "password6" },
  { "id": "user7", "password": "password7" },
  { "id": "user8", "password": "password8" },
  { "id": "user9", "password": "password9" },
  { "id": "user10", "password": "password10" },
  { "id": "user11", "password": "password11" },
  { "id": "user12", "password": "password12" },
  { "id": "user13", "password": "password13" },
  { "id": "user14", "password": "password14" },
  { "id": "user15", "password": "password15" },
  { "id": "user16", "password": "password16" },
  { "id": "user17", "password": "password17" },
  { "id": "user18", "password": "password18" },
  { "id": "user19", "password": "password19" },
  { "id": "user20", "password": "password20" },
  { "id": "user21", "password": "password21" },
  { "id": "user22", "password": "password22" },
  { "id": "user23", "password": "password23" },
  { "id": "user24", "password": "password24" },
  { "id": "user25", "password": "password25" },
  { "id": "user26", "password": "password26" },
  { "id": "user27", "password": "password27" },
  { "id": "user28", "password": "password28" },
  { "id": "user29", "password": "password29" },
  { "id": "user30", "password": "password30" },
  { "id": "user31", "password": "password31" },
  { "id": "user32", "password": "password32" },
  { "id": "user33", "password": "password33" },
  { "id": "user34", "password": "password34" },
  { "id": "user35", "password": "password35" },
  { "id": "user36", "password": "password36" },
  { "id": "user37", "password": "password37" },
  { "id": "user38", "password": "password38" },
  { "id": "user39", "password": "password39" },
  { "id": "user40", "password": "password40" },
  { "id": "user41", "password": "password41" },
  { "id": "user42", "password": "password42" },
  { "id": "user43", "password": "password43" },
  { "id": "user44", "password": "password44" },
  { "id": "user45", "password": "password45" },
  { "id": "user46", "password": "password46" },
  { "id": "user47", "password": "password47" },
  { "id": "user48", "password": "password48" },
  { "id": "user49", "password": "password49" },
  { "id": "user50", "password": "password50" },
  { "id": "user51", "password": "password51" },
  { "id": "user52", "password": "password52" },
  { "id": "user53", "password": "password53" },
  { "id": "user54", "password": "password54" },
  { "id": "user55", "password": "password55" },
  { "id": "user56", "password": "password56" },
  { "id": "user57", "password": "password57" },
  { "id": "user58", "password": "password58" },
  { "id": "user59", "password": "password59" },
  { "id": "user60", "password": "password60" },
  { "id": "user61", "password": "password61" },
  { "id": "user62", "password": "password62" },
  { "id": "user63", "password": "password63" },
  { "id": "user64", "password": "password64" },
  { "id": "user65", "password": "password65" },
  { "id": "user66", "password": "password66" },
  { "id": "user67", "password": "password67" },
  { "id": "user68", "password": "password68" },
  { "id": "user69", "password": "password69" },
  { "id": "user70", "password": "password70" },
  { "id": "user71", "password": "password71" },
  { "id": "user72", "password": "password72" },
  { "id": "user73", "password": "password73" },
  { "id": "user74", "password": "password74" },
  { "id": "user75", "password": "password75" },
  { "id": "user76", "password": "password76" },
  { "id": "user77", "password": "password77" },
  { "id": "user78", "password": "password78" },
  { "id": "user79", "password": "password79" },
  { "id": "user80", "password": "password80" },
  { "id": "user81", "password": "password81" },
  { "id": "user82", "password": "password82" },
  { "id": "user83", "password": "password83" },
  { "id": "user84", "password": "password84" },
  { "id": "user85", "password": "password85" },
  { "id": "user86", "password": "password86" },
  { "id": "user87", "password": "password87" },
  { "id": "user88", "password": "password88" },
  { "id": "user89", "password": "password89" },
  { "id": "user90", "password": "password90" },
  { "id": "user91", "password": "password91" },
  { "id": "user92", "password": "password92" },
  { "id": "user93", "password": "password93" },
  { "id": "user94", "password": "password94" },
  { "id": "user95", "password": "password95" },
  { "id": "user96", "password": "password96" },
  { "id": "user97", "password": "password97" },
  { "id": "user98", "password": "password98" },
  { "id": "user99", "password": "password99" },
  { "id": "user100", "password": "password100" }
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
