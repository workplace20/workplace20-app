docker run -dp 27017:27017 mongo
export SECRET=123
export DEBUG=*
export MONGOURI="mongodb://127.0.0.1:27017/workplace20?retryWrites=true&w=majority&useUnifiedTopology=true";