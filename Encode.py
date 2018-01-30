import execjs


def get_js():
    f = open("./js/jsencoder.js", 'r', encoding='UTF-8')
    htmlstr = ''
    line = f.readline()

    while line:
        htmlstr = htmlstr + line
        line = f.readline()
    return htmlstr


def encode(a):
    jsstr = get_js()
    ctx = execjs.compile(jsstr)
    a = ctx.call('SessionInhaE', a)
    #print(a)
    return a



