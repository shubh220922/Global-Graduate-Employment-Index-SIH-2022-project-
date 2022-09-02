import json

from flask import request

from flask import Flask, render_template, redirect, url_for

import pandas as pd
import numpy as np

app = Flask(__name__)

df = pd.read_csv('vects.csv')
df = df.transpose()

index_list = []
for i in range(58):
    index_list.append(df[i][0])

index_list = list(index_list)

Ts = []
Oha = []

def calculate_input_vector(inp_str):
    inp_arr = inp_str.split(',')
    
    out_arr = []
    for key in index_list:
        l = False
        for sec_key in inp_arr:
            if key == sec_key:
                l = True
                break
        if l:
            out_arr.append(1)
            l = False
        else:
            out_arr.append(0)

    return np.array(out_arr)


def calc_mag(arr):
    return np.sqrt(np.sum(np.square(arr)))

def calculate_cosine_for_index(arr):
    # First iterating through rows
    ndf = df.transpose()
    vec_mags = np.zeros(len(ndf.keys()) - 1)
    cosines = np.zeros(len(ndf.keys()) - 1)
    mag = calc_mag(arr)
    counter = 0
    for key in ndf.keys():
        if not key == 'stream/course':
            row = ndf[key]
            vec_mags[counter] = calc_mag(row)
            
            assert len(arr) == len(row)
            cosines[counter] = np.dot(arr, row)/(mag*vec_mags[counter])
            counter += 1

    return cosines


def getCosines(rel_str):
    inp_arr = calculate_input_vector(rel_str)
    one_hot_arr = []
    for i in range(len(inp_arr)):
        if inp_arr[i] >= 0.5:
            one_hot_arr.append(1)
        else:
            one_hot_arr.append(0)
    return calculate_cosine_for_index(inp_arr), one_hot_arr

# @app.route('/')
# def graphs():
#     pass

@app.route('/')
def index():
    return render_template('details_of_courses.html')

@app.route('/graph_html_page/')
def graph_html_page():
    print("graphs loaded")
    data = {"Scores": list(Ts), "EmployableOrNot": list(Oha)}
    return render_template('graph_html_page.html', data=data)

@app.route('/test', methods=['POST', 'GET'])
def test():
    global Ts, Oha, Bs
    output = request.get_json()
    #print(output) # This is the output that was stored in the JSON within the browser
    result = json.loads(output) #this converts the json output to a python dictionary
    glo_str = result['firstname']
    #print("glo_str:", glo_str)
    #print("test", getCosines("Physics"))
    Ts, Oha = getCosines(glo_str)
    l = 0
    print(Ts)
    return result 
    # render_template('graph_html_page.html')

# if _name_ == "_main_":
#     app.run(debug=True)