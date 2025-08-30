/* 创建练习trial */
var practice_trials = [

    {
        "A": "A2_0_3.5.wav",
        "X": "B7_0_3.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 26
    {
        "A": "E6_0_3.5.wav",
        "X": "G7_0_3.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 27
    {
        "A": "C7_0.6_0.wav",
        "X": "C5_0.6_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 28
    {
        "A": "E5_0_2.5.wav",
        "X": "D5_0_2.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
];


/* 创建主实验trial */
const ax_trials = [
    // Trial 0
    {
        "A": "G7_0_1.5.wav",
        "X": "G1_0_1.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 1
    {
        "A": "E1_0_2.wav",
        "X": "A1_0_2.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 2
    {
        "A": "C2_0_1.wav",
        "X": "B4_0_1.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 3
    {
        "A": "C6_0_1.5.wav",
        "X": "C2_0_1.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 4
    {
        "A": "B3_0.6_0.wav",
        "X": "G1_0.6_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 5
    {
        "A": "B3_2_0.wav",
        "X": "F6_2_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 6
    {
        "A": "D1_0_3.5.wav",
        "X": "E1_0_3.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 7
    {
        "A": "E7_0_2.5.wav",
        "X": "E6_0_2.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 8
    {
        "A": "B7_0.6_0.wav",
        "X": "D2_0.6_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 9
    {
        "A": "A2_0.6_0.wav",
        "X": "B5_0.6_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 10
    {
        "A": "F4_0_1.wav",
        "X": "F5_0_1.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 11
    {
        "A": "B5_0_1.wav",
        "X": "F1_0_1.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 12
    {
        "A": "C6_0_1.5.wav",
        "X": "A7_0_1.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 13
    {
        "A": "D6_3_0.wav",
        "X": "E6_3_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 14
    {
        "A": "F6_0_1.5.wav",
        "X": "F3_0_1.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 15
    {
        "A": "A4_3_0.wav",
        "X": "G3_3_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 16
    {
        "A": "G2_2_0.wav",
        "X": "G5_2_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 17
    {
        "A": "C7_2_0.wav",
        "X": "E7_2_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 18
    {
        "A": "D4_0_2.5.wav",
        "X": "D5_0_2.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 19
    {
        "A": "A3_0_2.5.wav",
        "X": "G3_0_2.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 20
    {
        "A": "B2_1.5_0.wav",
        "X": "E2_1.5_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 21
    {
        "A": "G4_0_3.5.wav",
        "X": "D7_0_3.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 22
    {
        "A": "A6_0_1.wav",
        "X": "E7_0_1.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 23
    {
        "A": "D3_1.5_0.wav",
        "X": "B6_1.5_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 24
    {
        "A": "A7_0_2.wav",
        "X": "A2_0_2.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 25
    {
        "A": "A2_0_3.5.wav",
        "X": "B7_0_3.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 26
    {
        "A": "E6_0_3.5.wav",
        "X": "G7_0_3.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 27
    {
        "A": "C7_0.6_0.wav",
        "X": "C5_0.6_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 28
    {
        "A": "G3_1.8_0.wav",
        "X": "G2_1.8_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 29
    {
        "A": "F2_2_0.wav",
        "X": "F1_2_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 30
    {
        "A": "E3_0_2.5.wav",
        "X": "A3_0_2.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 31
    {
        "A": "F7_1.8_0.wav",
        "X": "G3_1.8_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 32
    {
        "A": "G1_1.5_0.wav",
        "X": "G6_1.5_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 33
    {
        "A": "B7_0_1.wav",
        "X": "D3_0_1.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 34
    {
        "A": "B4_0_2.wav",
        "X": "B5_0_2.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 35
    {
        "A": "E2_0_1.wav",
        "X": "C4_0_1.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 36
    {
        "A": "E4_3_0.wav",
        "X": "A6_3_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 37
    {
        "A": "E4_3_0.wav",
        "X": "G4_3_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 38
    {
        "A": "A3_0_2.wav",
        "X": "A5_0_2.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 39
    {
        "A": "D7_3_0.wav",
        "X": "G7_3_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 40
    {
        "A": "A4_0_3.5.wav",
        "X": "C6_0_3.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 41
    {
        "A": "D4_0.6_0.wav",
        "X": "G4_0.6_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 42
    {
        "A": "G3_1.8_0.wav",
        "X": "F3_1.8_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 43
    {
        "A": "E5_0_2.5.wav",
        "X": "D5_0_2.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 44
    {
        "A": "D3_0_1.5.wav",
        "X": "A4_0_1.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 45
    {
        "A": "G4_0_3.5.wav",
        "X": "A6_0_3.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 46
    {
        "A": "C1_2_0.wav",
        "X": "D1_2_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 47
    {
        "A": "B4_0_2.wav",
        "X": "C4_0_2.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 48
    {
        "A": "B1_0_2.wav",
        "X": "E3_0_2.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 49
    {
        "A": "C2_0_2.5.wav",
        "X": "E5_0_2.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 50
    {
        "A": "D7_0_2.wav",
        "X": "E4_0_2.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 51
    {
        "A": "F5_3_0.wav",
        "X": "B6_3_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 52
    {
        "A": "F5_0_3.5.wav",
        "X": "F4_0_3.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 53
    {
        "A": "F6_0_1.5.wav",
        "X": "B6_0_1.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 54
    {
        "A": "E3_1.8_0.wav",
        "X": "E4_1.8_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 55
    {
        "A": "G6_0_1.5.wav",
        "X": "B1_0_1.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 56
    {
        "A": "G6_0_3.5.wav",
        "X": "A1_0_3.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 57
    {
        "A": "G2_1.5_0.wav",
        "X": "C1_1.5_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 58
    {
        "A": "C4_3_0.wav",
        "X": "D1_3_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 59
    {
        "A": "E1_1.5_0.wav",
        "X": "E2_1.5_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 60
    {
        "A": "B2_0_1.5.wav",
        "X": "B3_0_1.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 61
    {
        "A": "C3_2_0.wav",
        "X": "C7_2_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 62
    {
        "A": "G5_1.8_0.wav",
        "X": "G2_1.8_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 63
    {
        "A": "B1_3_0.wav",
        "X": "D4_3_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 64
    {
        "A": "D1_0_1.5.wav",
        "X": "F6_0_1.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 65
    {
        "A": "C5_0_2.wav",
        "X": "B5_0_2.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 66
    {
        "A": "E7_0_1.wav",
        "X": "F7_0_1.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 67
    {
        "A": "A5_0_2.5.wav",
        "X": "F5_0_2.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 68
    {
        "A": "A7_3_0.wav",
        "X": "F7_3_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 69
    {
        "A": "E5_0_1.wav",
        "X": "E7_0_1.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 70
    {
        "A": "D6_0.6_0.wav",
        "X": "D2_0.6_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 71
    {
        "A": "B5_0_2.5.wav",
        "X": "E3_0_2.5.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 72
    {
        "A": "C3_0_3.5.wav",
        "X": "A3_0_3.5.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 73
    {
        "A": "A1_0_2.5.wav",
        "X": "A5_0_2.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 74
    {
        "A": "F2_2_0.wav",
        "X": "B2_2_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 75
    {
        "A": "G5_1.8_0.wav",
        "X": "F5_1.8_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 76
    {
        "A": "E2_0_2.wav",
        "X": "C3_0_2.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 77
    {
        "A": "B6_1.5_0.wav",
        "X": "B1_1.5_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 78
    {
        "A": "F4_2_0.wav",
        "X": "A4_2_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 79
    {
        "A": "C1_2_0.wav",
        "X": "C6_2_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 80
    {
        "A": "C4_0_1.5.wav",
        "X": "E5_0_1.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 81
    {
        "A": "F7_1.8_0.wav",
        "X": "A3_1.8_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 82
    {
        "A": "D2_3_0.wav",
        "X": "D6_3_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 83
    {
        "A": "F3_0_1.wav",
        "X": "G6_0_1.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 84
    {
        "A": "F1_1.5_0.wav",
        "X": "G4_1.5_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 85
    {
        "A": "C5_0.6_0.wav",
        "X": "C7_0.6_0.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 86
    {
        "A": "F1_1.5_0.wav",
        "X": "C5_1.5_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 87
    {
        "A": "A6_0.6_0.wav",
        "X": "G1_0.6_0.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 88
    {
        "A": "A5_0_2.5.wav",
        "X": "A2_0_2.5.wav",
        "task": "melody",
        "answer": "same"
    },
    // Trial 89
    {
        "A": "A1_0.6_0.wav",
        "X": "D1_0.6_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 90
    {
        "A": "E6_0_2.wav",
        "X": "D5_0_2.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 91
    {
        "A": "B6_1.5_0.wav",
        "X": "E6_1.5_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 92
    {
        "A": "F3_0_3.5.wav",
        "X": "F2_0_3.5.wav",
        "task": "lyrics",
        "answer": "different"
    },
    // Trial 93
    {
        "A": "G7_1.8_0.wav",
        "X": "C7_1.8_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 94
    {
        "A": "D5_2_0.wav",
        "X": "A1_2_0.wav",
        "task": "melody",
        "answer": "different"
    },
    // Trial 95
    {
        "A": "G1_1.5_0.wav",
        "X": "E1_1.5_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 96
    {
        "A": "D2_0.6_0.wav",
        "X": "G2_0.6_0.wav",
        "task": "lyrics",
        "answer": "same"
    },
    // Trial 97
    {
        "A": "D5_0_1.wav",
        "X": "A7_0_1.wav",
        "task": "lyrics",
        "answer": "different"
    },
];