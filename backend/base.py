import fuzzy
from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__, "/frontend/dist")
CORS(app)


@app.route("/", methods=["GET", "POST"])
def fuzzy_result():
    data = request.get_json()
    berat = data["weight"]
    tinggi = data["height"]
    result = fuzzy.calculate_fuzzy_bmi(berat, tinggi)
    return {
        "berat": berat,
        "tinggi": tinggi,
        "BMI": result,
    }


if __name__ == "__main__":
    app.run(debug=True)
