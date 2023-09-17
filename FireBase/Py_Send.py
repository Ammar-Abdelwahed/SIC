import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase
cred = credentials.Certificate("D:/Courses/SIC/FireBase/assignment-b6cec-firebase-adminsdk-scrag-753d1b4e7c.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Add Data
def add_data():
    doc_ref = db.collection('information').document('Info')
    doc_ref.set({
        'name': 'kareem',
        'height':'180 cm',
        'gender':'Male'

    })
    print("Data added.")



if __name__ == '__main__':
    add_data()