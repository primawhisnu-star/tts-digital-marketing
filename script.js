// Ukuran grid 15 baris x 15 kolom
const rows = 15;
const cols = 15;

// Kunci jawaban posisi huruf pada grid (Format koordinat -> Baris_Kolom: Huruf)
const answers = {
    // 1 Mendatar: SEO
    "0_1": "S", "0_2": "E", "0_3": "O",
    // 2 Menurun: PODCAST
    "1_1": "P", "2_1": "O", "3_1": "D", "4_1": "C", "5_1": "A", "6_1": "S", "7_1": "T",
    // 3 Menurun: ADS
    "1_3": "A", "2_3": "D", "3_3": "S",
    // 4 Mendatar: PPC & 4 Menurun: PDF
    "2_1": "O", "2_2": "P", "2_3": "D", "2_4": "C",
    // 5 Menurun: LEADS
    "1_5": "L", "2_5": "E", "3_5": "A", "4_5": "D", "5_5": "S",
    // 6 Mendatar: AFILIASI
    "4_1": "C", "4_2": "A", "4_3": "F", "4_4": "I", "4_5": "L", "4_6": "I", "4_7": "A", "4_8": "S", "4_9": "I",
    // 7 Mendatar: LANDINGPAGE
    "6_2": "L", "6_3": "A", "6_4": "N", "6_5": "D", "6_6": "I", "6_7": "N", "6_8": "G", "6_9": "P", "6_10": "A", "6_11": "G", "6_12": "E",
    // 8 Menurun: ANALYTICS
    "6_8": "G", "7_8": "A", "8_8": "N", "9_8": "A", "10_8": "L", "11_8": "Y", "12_8": "T", "13_8": "I", "14_8": "C", "15_8": "S",
    // 9 Mendatar: EBOOK
    "8_1": "E", "8_2": "B", "8_3": "O", "8_4": "O", "8_5": "K",
    // 10 Menurun: NICHE
    "8_4": "O", "9_4": "N", "10_4": "I", "11_4": "C", "12_4": "H", "13_4": "E",
    // 11 Mendatar: EMAIL & 11 Menurun: EDITOR
    "10_1": "E", "10_2": "M", "10_3": "A", "10_4": "I", "10_5": "L",
    "11_1": "D", "12_1": "I", "13_1": "T", "14_1": "O", "15_1": "R",
    // 12 Menurun: CTA
    "9_3": "C", "10_3": "A", "11_3": "T",
    // 13 Mendatar: ROI
    "12_6": "R", "12_7": "O", "12_8": "I",
    // 14 Mendatar: WHATSAPP & 14 Menurun: BLOG
    "14_1": "O", "14_2": "W", "14_3": "H", "14_4": "A", "14_5": "T", "14_6": "S", "14_7": "A", "14_8": "P", "14_9": "P",
    "11_2": "B", "12_2": "L", "13_2": "O", "14_2": "W", 
    // 15 Mendatar: TIKTOK
    "7_6": "T", "7_7": "I", "7_8": "K", "7_9": "T", "7_10": "O", "7_11": "K",
    // 16 Mendatar: INFLUENCER
    "9_5": "I", "9_6": "N", "9_7": "F", "9_8": "L", "9_9": "U", "9_10": "E", "9_11": "N", "9_12": "C", "9_13": "E", "9_14": "R",
    // 17 Menurun: HASHTAG
    "5_10": "H", "6_10": "A", "7_10": "O", "8_10": "S", "9_10": "E", "10_10": "H", "11_10": "T", "12_10": "A", "13_10": "G"
};

// Penempatan nomor petunjuk soal kecil di sudut kotak tertentu
const cellNumbers = {
    "0_1": "1", "1_1": "2", "1_3": "3", "2_2": "4", "1_5": "5", 
    "4_3": "6", "6_2": "7", "7_8": "8", "8_1": "9", "9_4": "10",
    "10_1": "11", "9_3": "12", "12_6": "13", "11_2": "14", 
    "7_6": "15", "9_5": "16", "5_10": "17"
};

const board = document.getElementById("board");

// Membuat Elemen Grid Otomatis Saat Halaman Dimuat
for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        const cellId = `${r}_${c}`;
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");

        // Jika koordinat masuk dalam daftar jawaban, buat kotak input putih
        if (answers[cellId]) {
            const input = document.createElement("input");
            input.setAttribute("maxlength", "1");
            input.setAttribute("id", `input_${cellId}`);
            cellDiv.appendChild(input);

            // Jika koordinat memiliki nomor soal, pasang label angka kecil
            if (cellNumbers[cellId]) {
                const numDiv = document.createElement("div");
                numDiv.classList.add("cell-number");
                numDiv.innerText = cellNumbers[cellId];
                cellDiv.appendChild(numDiv);
            }
        } else {
            // Jika koordinat kosong, beri warna hitam mati
            cellDiv.classList.add("black");
        }
        board.appendChild(cellDiv);
    }
}

// Fungsi Memeriksa Jawaban User
function checkAnswers() {
    for (const key in answers) {
        const inputEl = document.getElementById(`input_${key}`);
        if (inputEl) {
            const userLetter = inputEl.value.trim().toUpperCase();
            // Validasi kecocokan input user dengan kunci jawaban
            if (userLetter === answers[key].toUpperCase()) {
                inputEl.classList.remove("wrong");
                inputEl.classList.add("correct");
            } else {
                inputEl.classList.remove("correct");
                inputEl.classList.add("wrong");
            }
        }
    }
}