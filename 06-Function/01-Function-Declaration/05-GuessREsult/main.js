const sender = 'Matt';

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // From Matt to Sarah
sendTo(null); // From null to undefined
