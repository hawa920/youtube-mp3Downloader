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


@app.route("/", methods = ['GET'])
@cross_origin()
def index():
  return "<h1>DON'T TRY ME</h1>"


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


if __name__ == "__main__":
  app.run(port=5000, debug=True)
