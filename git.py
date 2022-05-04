import requests 

username = 'j-stat'
password = "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"

api = "https://api.github.com/orgs/compbiocore/repos"

def find_pages():
    params = {'page': 1, 'per_page':30}
    r = requests.get(api, params=params, auth=(username, password))
    num_pages = r.links['last']['url']
    num_pages = num_pages.split("?page=", 1)[1]
    num_pages = int(num_pages.split("&", 1)[0])
    print(num_pages)

find_pages()
