import pickle
import json
import pandas as pd
import numpy as np
import os

dir = os.getcwd()
# print(dir)


features_to_encode = ['quarter', 'department', 'day', 'team', 'month']

with open(os.path.join(dir , 'employee'), 'r') as f:
    # Load the contents of the file into a variable
    data = json.load(f)
os.remove(os.path.join(dir , 'employee'))
    
df_dict = dict()
df_dict['quarter'] = data['quarter']
df_dict['department'] = data['department']
df_dict['day'] = data['day']
df_dict['team'] = int(data['team'])
df_dict['targeted_productivity'] = float(data['targeted_productivity'])
df_dict['smv'] = float(data['smv'])
df_dict['over_time'] = int(data['over_time'])
df_dict['incentive'] = int(data['incentive'])
df_dict['idle_time'] = float(data['idle_time'])
df_dict['idle_men'] = int(data['idle_men'])
df_dict['no_of_style_change'] = int(data['no_of_style_change'])
df_dict['no_of_workers'] = int(data['no_of_workers'])
df_dict['month'] = int(data['month'])



df = pd.DataFrame(df_dict, index=[0])
with open(os.path.join(dir ,'encoder.pkl'), 'rb') as f:
    encoder = pickle.load(f)

encoded_data = encoder.transform(df[features_to_encode])
encoded_data_df = pd.DataFrame(encoded_data, columns=encoder.get_feature_names_out(features_to_encode))

final_df = pd.concat([df.drop(features_to_encode, axis=1), encoded_data_df], axis=1)

# print(final_df.head())
with open(os.path.join(dir ,'model_rf.pkl'), 'rb') as f:
    model = pickle.load(f)
    

prediction = model.predict(final_df)
print(np.round(prediction[0]*100, 2))