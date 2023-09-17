const admin = require('firebase-admin');

// Initialize Firebase
const serviceAccount = require('D:/Courses/SIC/FireBase/assignment-b6cec-firebase-adminsdk-scrag-753d1b4e7c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Specify the document ID
const documentId = 'Info'; // Replace with your desired document ID

// Add data to the specified document
const dataToAdd = {
  name: 'Omar',
  gender: 'Male',
  height:'173 CM'
};

const docRef = db.collection('information').doc(documentId);

docRef.set(dataToAdd)
  .then(() => {
    console.log(`Data added to document with ID: ${documentId}`);
  })
  .catch(error => {
    console.error(`Error adding data: ${error}`);
  });