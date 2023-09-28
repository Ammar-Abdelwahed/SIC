#!/usr/bin/env python
# coding: utf-8

# In[1]:


from firebase_admin import credentials, initialize_app, storage
cred = credentials.Certificate("D:/Courses/SIC/FireBase/assignment-b6cec-firebase-adminsdk-scrag-753d1b4e7c.json")
initialize_app(cred, {'storageBucket': 'assignment-b6cec.appspot.com'})

fileName = "C:/Users/Ammaro/Desktop/Stars.jpg"
bucket = storage.bucket()
blob = bucket.blob(fileName)
blob.upload_from_filename(fileName)
blob.make_public()


# In[ ]:




