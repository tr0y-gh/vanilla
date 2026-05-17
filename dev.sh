#!/usr/bin/env python3
from http.server import HTTPServer, SimpleHTTPRequestHandler
import os, sys

class Server(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            self.path = '/index.html'
        return super().do_GET()

if __name__ == '__main__':
    try:
        PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
        print(f"Server running on http://127.0.0.1:{PORT}")
        HTTPServer(('', PORT), Server).serve_forever()
    except KeyboardInterrupt:
        print('Exit')
