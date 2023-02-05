from flask import Flask, send_file, make_response, jsonify
from flask_cors import CORS
import io
from base64 import encodebytes
from PIL import Image
from DeepImageSearch import SearchImage

app = Flask(__name__)
CORS(app)

@app.route('/api/houses')
def houses():
    return ['house1']

def get_response_image(image_path):
    pil_img = Image.open(image_path, mode='r') # reads the PIL image
    byte_arr = io.BytesIO()
    pil_img.save(byte_arr, format='PNG') # convert the PIL image to byte array
    encoded_img = encodebytes(byte_arr.getvalue()).decode('ascii') # encode as base64
    return encoded_img

@app.route('/api/predict')
def predict():
    ordered_imgs = SearchImage().get_similar_images(image_path='house_img/house_test_2.jpg', number_of_images=5)
    encoded_imges = []
    for num in ordered_imgs:
        encoded_imges.append(get_response_image(ordered_imgs[num]))
    return jsonify({'result': encoded_imges})

if __name__ == '__main__':
    app.run(debug=True)