import fuzzy
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/data", methods=["GET", "POST"])
def fuzzy_result():
    data = request.json()
    # return {"data": data}
    berat = int(data["weight"])
    tinggi = int(data["height"])
    # tinggi = request.json.get["height"]
    result = fuzzy.calculate_fuzzy_bmi(berat, tinggi)
    return {
        "berat": berat,
        "tinggi": tinggi,
        "BMI": result,
    }


# Running app
if __name__ == "__main__":
    app.run(debug=True)
