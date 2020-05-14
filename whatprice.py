#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
whatprice
Price agregtion for tools
@category   Webapp
@version    $ID: 1.1.1, 2015-07-17 17:00:00 CST $;
@author     KMR
@licence    MIT
"""

from flask import Flask, render_template
from scrapers.processor import Processor

app = Flask(__name__)

"""
Main page, just render the index
"""
@app.route('/')
def index():
    return render_template('index.html')

"""
Search for something
"""
@app.route('/search/<terms>')
def search_for(terms):
    results = processor.find_prices(terms)

    return render_template('results.html', results=results)

url_for('static', filename='terminal.css')