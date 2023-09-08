#!/usr/bin/env python
# coding: utf-8

# ### Imports

# In[32]:


import psutil as ps
from datetime import datetime as dt
import socket
import time
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import metrics


# ### CSV File

# In[2]:


cpu_info = open('cpu_info.csv', 'w')
cpu_info.write("date,cpu-usage,n-cpu,memory-usage,disk-usage,Host-IP\n")
cpu_info.close()


# In[3]:


df = pd.read_csv('cpu_info.csv')
x = 10
while(x > 0):
    time.sleep(1.5)
    date = dt.now()
    n_cpu = ps.cpu_count()
    cpu = ps.cpu_percent(interval = 1, percpu = True)
    cpu_usage = sum([i/len(cpu) for i in cpu])
    cpu_usage = round(cpu_usage, 2)
    mem_usage = ps.virtual_memory()[3]
    disk_usage = ps.disk_usage('C:')[1]
    hostname = socket.gethostname()
    IP = socket.gethostbyname(hostname)
    L = [date, cpu_usage, n_cpu, mem_usage, disk_usage, IP]
    df.loc[len(df)] = L
    x -= 1


# In[4]:


df


# # ML Model

# ### Data Cleaning

# In[5]:


df.info()


# In[6]:


df = df.drop(['date', 'Host-IP'], axis = 1)
df.reset_index(inplace=True)


# In[7]:


df['n-cpu'] = df['n-cpu'].astype(int) 
df['memory-usage'] = df['memory-usage'].astype(float)
df['disk-usage'] = df['disk-usage'].astype(float) 


# In[8]:


df.info()


# ### Scaling

# In[15]:


df_train = df.drop('cpu-usage',axis = 1)
scaler = StandardScaler()
scaler.fit(df_train)


# ### Data Splitting

# In[16]:


X = df_train
y = df['cpu-usage']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=101)


# ### LinearRegressin 

# ##### Training

# In[17]:


regr = LinearRegression()
regr.fit(X_train, y_train)


# #### Prediction

# In[18]:


pred = regr.predict(X_test)


# #### Evaluation

# In[19]:


y_test = np.array(y_test).reshape(-1,1)


# In[22]:


pred = np.array(pred).reshape(-1,1)


# In[37]:


pred.size


# In[38]:


y_test.size


# In[33]:


print('MAE:', metrics.mean_absolute_error(y_test, pred))
print('MSE:', metrics.mean_squared_error(y_test, pred))
print('RMSE:', np.sqrt(metrics.mean_squared_error(y_test, pred)))


# In[39]:


print("Accuracy:",metrics.r2_score(y_test, pred))

