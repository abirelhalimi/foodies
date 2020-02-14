import json
import numpy as np
import pandas as pd
from flask import Flask, abort, request, jsonify, render_template, redirect, url_for, flash

df = pd.read_csv('zomato.csv')
df.drop_duplicates(subset="Restaurant Name", keep='first', inplace=True)
df.dropna(inplace=True)


def RecommanByCuisines(cuisine):
    cuisine = cuisine.lower()
    print(cuisine)
    df['Cuisines'] = df['Cuisines'].str.lower()
    data = df[df['Cuisines'].str.contains(cuisine)]
    data.sort_values(by=["Votes", "Aggregate rating"], inplace=True, ascending=False)
    data = data['Restaurant Name'].iloc[:3]

    return (data.values.tolist())


app = Flask(__name__)


@app.route('/cuisines/', methods=['POST', 'GET'])
def make_predict():
    L = []
    data = request.get_json(force=True)
    for e in data:
        L.append(RecommanByCuisines(e))

    return jsonify(L)


if __name__ == '__main__':
    app.run(port=9000, debug=True)
