import Encode

import requests

import url

def login(uid, pwd, session, data):
    # print(session)

    uid_encoded = Encode.encode(uid)
    pwd_encoded = Encode.encode(pwd)
    Data = {
        'p_userid': uid_encoded,
        'p_passwd': pwd_encoded,
        'p_grcode': 'N000001'
    }
    r = session.post(url.base_url + url.login_url, Data)

    return r
