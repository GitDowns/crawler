from crawler import Encode
from bs4 import BeautifulSoup
from urllib.request import urlopen
import requests

uid = 'u1510022'
pwd = '19950513'

if __name__ == '__main__':
    baseurl = 'http://eclass.inha.uz'
    homeurl = "/servlet/controller.homepage.MainServlet"
    loginurl = "/jsp/include/ajax.login.jsp"

    soup = BeautifulSoup(urlopen((baseurl+homeurl)).read().decode('utf-8'), features='lxml')
    idtag = soup.find('input', {'class': 'id'})
    pwtag = soup.find('input', {'class': 'pw'})
    # print(idtag)
    # print(pwtag)
    session = requests.Session()
    print(session)
    uid_encoded = Encode.encode(uid)
    pwd_encoded = Encode.encode(pwd)
    Data = {
        'p_userid': uid_encoded,
        'p_passwd': pwd_encoded,
        'p_grcode': 'N000001'
    }
    r = session.post(baseurl+loginurl, Data)
    homepage =(requests.get(baseurl+homeurl, cookies = r.cookies))
   # homepage=requests.get(baseurl+homeurl, cookies=r.cookies).text
    print(homepage)
    #soup = BeautifulSoup(homepage, features='lxml')

    #print(r.text)
    print(soup)
    #print(r.cookies.get_dict())
    #print(r.cookies)
    #print(r)
    session = requests.Session()

