import os
import json
import random
import string
import youtube_dl
from flask_cors import CORS, cross_origin
from flask import Flask, request, send_from_directory, send_file, make_response


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/", methods = ['GET', 'POST'])
@cross_origin()
def index():
  if request.method == 'POST':
    return 'Fuck off!'
  return "<h1>You can put a web interface for youtube downloader here</h1>"


@app.route("/mp3-dl", methods = ['POST'])
@cross_origin()
def downloader():

  url = json.dumps(request.form.get('link'))
  url = str(url[1:len(str(url))-1])
  outfile = '../storage/' + ''.join(random.choice(string.ascii_letters+string.digits) for i in range(30)) + '.mp3'
  options = {

    'format': 'bestaudio/best',
    'postprocessors': [{
      'key': 'FFmpegExtractAudio',
      'preferredcodec': 'mp3',
    }],
    'noplaylist': True,
    'outtmpl': outfile
  }

  # Download with youtube-dl
  with youtube_dl.YoutubeDL(options) as ydl:
    ydl.download([url])
  response = make_response(send_file(outfile))
  # Http header
  response.headers['Content-Disposition'] = "attachment; filename=" + outfile[12:]
  return response
#return send_file(outfile)

@app.route('/<path:dummy>', methods = ['GET', 'POST'])
@cross_origin()
def fallback(dummy):
  return '<h1>Bro, don\'t do this...</h1>'


if __name__ == "__main__":
  #app.run(port=5000, debug=True)
  # Comment the line above and use the line below if you launch on your own server
  app.run(host='0.0.0.0')
