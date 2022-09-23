from appwrite.client import Client
from appwrite.services.databases import Databases

from bs4 import BeautifulSoup
import requests

# TODO: Error Handling


def crawlingNews():

    website_request = requests.get('http://msit.in/latest_news')
    website_content = BeautifulSoup(website_request.content, 'html.parser')

    jobs_link = website_content.select('div.tab-content a')
    return jobs_link


def crawlingNotice():

    website_request = requests.get('http://msit.in/notices')
    website_content = BeautifulSoup(website_request.content, 'html.parser')
    notices_link = website_content.select('div.tab-content a')
    return notices_link


def crawlingMarq():

    website_request = requests.get('http://msit.in/')
    website_content = BeautifulSoup(website_request.content, 'html.parser')

    marq_link = website_content.select('div.marquee-text a')
    return marq_link


def put_data(database):
    news = converter(crawlingNews)
    notice = converter(crawlingNotice)
    for i in range(0, 5):
        database.create_document('schedudb', 'news',
                                 'unique()', {'news': news[i]},)
        i += 1
    for j in range(0, 5):
        database.create_document('schedudb', 'notice',
                                 'unique()', {'notice': notice[j]},)
        j += 1


def converter(func_name):
    temp = func_name()
    list = []
    for url in temp:
        st = str(url)
        start = st[:9]
        end = st[9:]
        final = start+"http://msit.in/"+end
        list.append(final)
    return list


"""
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
"""


def main(req, res):
    client = Client()

    # # You can remove services you don't use
    database = Databases(client)

    if not req.variables.get('APPWRITE_FUNCTION_ENDPOINT') or not req.variables.get('APPWRITE_FUNCTION_API_KEY'):
        print('Environment variables are not set. Function cannot use Appwrite SDK.')
        return res.json({
            "message": "Environment variables are not set. Function cannot use Appwrite SDK."})
    else:
        (
            client
            .set_endpoint(req.variables.get('APPWRITE_FUNCTION_ENDPOINT'))
            .set_project('schedumate')
            .set_key(req.variables.get('APPWRITE_FUNCTION_API_KEY'))
        )

        put_data(database)
