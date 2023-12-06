def calculate_fuzzy_bmi(berat_badan, tinggi_badan):
    berat_badan = int(berat_badan)
    tinggi_badan = int(tinggi_badan)
    input_data = [berat_badan, tinggi_badan]

    nilai_berat = [0, 0, 0]
    nilai_tinggi = [0, 0, 0]
    z = 0
    ringan = normal = berat = rendah = sedang = tinggi = 0

    # fuzzifikasi
    if input_data[0] <= 40:
        ringan = 1
        nilai_berat[0] = ringan
    if input_data[0] > 40 and input_data[0] < 55:
        ringan = (55 - input_data[0]) / 15
        nilai_berat[0] = round(ringan, 2)
    if input_data[0] > 45 and input_data[0] < 55:
        normal = (input_data[0] - 45) / 10
        nilai_berat[1] = round(normal, 2)
    if input_data[0] == 55:
        normal = 1
        nilai_berat[1] = normal
    if input_data[0] > 55 and input_data[0] < 65:
        normal = (65 - input_data[0]) / 10
        nilai_berat[1] = round(normal, 2)
    if input_data[0] > 55 and input_data[0] < 75:
        berat = (input_data[0] - 55) / 20
        nilai_berat[2] = round(berat, 2)
    if input_data[0] >= 75:
        berat = 1
        nilai_berat[2] = berat

    if input_data[1] <= 150:
        rendah = 1
        nilai_tinggi[0] = rendah
    if input_data[1] > 150 and input_data[1] < 165:
        rendah = (165 - input_data[1]) / 15
        sedang = (input_data[1] - 150) / 15
        nilai_tinggi[0] = round(rendah, 2)
        nilai_tinggi[1] = round(sedang, 2)
    if input_data[1] == 165:
        sedang = 1
        nilai_tinggi[1] = sedang
    if input_data[1] > 160 and input_data[1] < 175:
        sedang = (175 - input_data[1]) / 10
        tinggi = (input_data[1] - 160) / 15
        nilai_tinggi[1] = round(sedang, 2)
        nilai_tinggi[2] = round(tinggi, 2)
    if input_data[1] > 165 and input_data[1] < 175:
        sedang = (175 - input_data[1]) / 10
        tinggi = (input_data[1] - 160) / 15
        nilai_tinggi[1] = round(sedang, 2)
        nilai_tinggi[2] = round(tinggi, 2)
    if input_data[1] >= 175:
        tinggi = 1
        nilai_tinggi[2] = tinggi

    print("nilai_berat[0], nilai_berat[1], nilai_berat[2]")
    print(nilai_berat[0], nilai_berat[1], nilai_berat[2])
    print("nilai_tinggi[0], nilai_tinggi[1], nilai_tinggi[2]")
    print(nilai_tinggi[0], nilai_tinggi[1], nilai_tinggi[2])
    print()

    # inference
    Kurus_Berat = []
    nilai_kurus_berat = 0
    if nilai_tinggi[2] != 0 and nilai_berat[0] != 0:
        Kurus_Berat.append(min(nilai_tinggi[2], nilai_berat[0]))
        nilai_kurus_berat = max(Kurus_Berat)
    z_1 = 17 - nilai_kurus_berat
    print(f"nilai_kurus_berat: {nilai_kurus_berat}")
    print(f"z_1: {z_1}")
    print("")

    Kurus_Ringan = []
    nilai_kurus_ringan = [0, 0]
    z_2 = [0, 0]
    if nilai_tinggi[1] != 0 and nilai_berat[0] != 0:
        Kurus_Ringan.append(min(nilai_tinggi[1], nilai_berat[0]))
        nilai_kurus_ringan[0] = max(Kurus_Ringan)
    if nilai_tinggi[2] != 0 and nilai_berat[1] != 0:
        Kurus_Ringan.append(min(nilai_tinggi[2], nilai_berat[1]))
        nilai_kurus_ringan[1] = max(Kurus_Ringan)
    z_2[0] = 18.5 - nilai_kurus_ringan[0]
    z_2[1] = 18.5 - nilai_kurus_ringan[1]
    print(f"nilai_kurus_ringan[0]: {nilai_kurus_ringan[0]}")
    print(f"z_2[0]: {z_2[0]}")
    print(f"nilai_kurus_ringan[1]: {nilai_kurus_ringan[1]}")
    print(f"z_2[1]: {z_2[1]}")
    print("")

    Normal = []
    nilai_normal = [0, 0, 0]
    z_3 = [0, 0, 0]
    if nilai_tinggi[0] != 0 and nilai_berat[0] != 0:
        Normal.append(min(nilai_tinggi[0], nilai_berat[0]))
        nilai_normal[0] = max(Normal)
    if nilai_tinggi[1] != 0 and nilai_berat[1] != 0:
        Normal.append(min(nilai_tinggi[1], nilai_berat[1]))
        nilai_normal[1] = max(Normal)
    if nilai_tinggi[2] != 0 and nilai_berat[2] != 0:
        Normal.append(min(nilai_tinggi[2], nilai_berat[2]))
        nilai_normal[2] = max(Normal)
    z_3[0] = 25 - nilai_normal[0]
    z_3[1] = 25 - nilai_normal[1]
    z_3[2] = 25 - nilai_normal[2]
    print(f"nilai_normal[0]: {nilai_normal[0]}")
    print(f"z_3[0]: {z_3[0]}")
    print(f"nilai_normal[1]: {nilai_normal[1]}")
    print(f"z_3[1]: {z_3[1]}")
    print(f"nilai_normal[2]: {nilai_normal[2]}")
    print(f"z_3[2]: {z_3[2]}")
    print("")

    Gemuk_Ringan = []
    nilai_gemuk_ringan = [0, 0]
    z_4 = [0, 0]
    if nilai_tinggi[0] != 0 and nilai_berat[1] != 0:
        Gemuk_Ringan.append(min(nilai_tinggi[0], nilai_berat[1]))
        nilai_gemuk_ringan[0] = max(Gemuk_Ringan)
    if nilai_tinggi[1] != 0 and nilai_berat[2] != 0:
        Gemuk_Ringan.append(min(nilai_tinggi[1], nilai_berat[2]))
        nilai_gemuk_ringan[1] = max(Gemuk_Ringan)
    z_4[0] = 27 - nilai_gemuk_ringan[0]
    z_4[1] = 27 - nilai_gemuk_ringan[1]
    print(f"nilai_gemuk_ringan[0]: {nilai_gemuk_ringan[0]}")
    print(f"z_4[0]: {z_4[0]}")
    print(f"nilai_gemuk_ringan[1]: {nilai_gemuk_ringan[1]}")
    print(f"z_4[1]: {z_4[1]}")
    print("")

    Gemuk_Berat = []
    nilai_gemuk_berat = 0
    if nilai_tinggi[0] != 0 and nilai_berat[2] != 0:
        Gemuk_Berat.append(min(nilai_tinggi[0], nilai_berat[2]))
        nilai_gemuk_berat = max(Gemuk_Berat)
    z_5 = 26 + nilai_gemuk_berat
    print(f"nilai_gemuk_berat: {nilai_gemuk_berat}")
    print(f"z_5: {z_5}")
    print("")

    # defuzzifikasi
    pembagi = (
        nilai_kurus_berat
        + nilai_kurus_ringan[0]
        + nilai_kurus_ringan[1]
        + nilai_normal[0]
        + nilai_normal[1]
        + nilai_normal[2]
        + nilai_gemuk_ringan[0]
        + nilai_gemuk_ringan[1]
        + nilai_gemuk_berat
    )
    z = (
        (nilai_kurus_berat * z_1)
        + (nilai_kurus_ringan[0] * z_2[0])
        + (nilai_kurus_ringan[1] * z_2[1])
        + (nilai_normal[0] * z_3[0])
        + (nilai_normal[1] * z_3[1])
        + (nilai_normal[2] * z_3[2])
        + (nilai_gemuk_ringan[0] * z_4[0])
        + (nilai_gemuk_ringan[1] * z_4[1])
        + (nilai_gemuk_berat * z_5)
    ) / pembagi
    z = round(z, 2)
    print(z)
    return z
