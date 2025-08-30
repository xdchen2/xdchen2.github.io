var jsPsych = initJsPsych({
    on_finish: function () {
        jsPsych.data.get().localSave('csv', 'collected-data.csv');
    }
});

/*/##########################################################################/*/
/*/###                                                                     ###*/
/*/###                             Procedure                               ###*/
/*/###                                                                     ###*/
/*/##########################################################################/*/

// 1. Consent form
// 2. Personal information
// 3. Practice trials
// 4. Main experiment (5 blocks, 50 trials each)

/*/##########################################################################/*/
/*/###                                                                     ###*/
/*/###                             Stimuli                                 ###*/
/*/###                                                                     ###*/
/*/##########################################################################/*/

var ax_trials = [
    // Trial 0
    {
        "A": "D_3_S_3.5_T_3.wav",
        "X": "G_2_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 1
    {
        "A": "H_2_S_2.5_T_0.6.wav",
        "X": "H_1_S_2.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 2
    {
        "A": "I_3_S_3.5_T_0.6.wav",
        "X": "G_1_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 3
    {
        "A": "D_1_S_2.5_T_3.wav",
        "X": "D_3_S_2.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 4
    {
        "A": "H_3_S_1.5_T_1.5.wav",
        "X": "H_3_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 5
    {
        "A": "D_3_S_2_T_2.wav",
        "X": "F_3_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 6
    {
        "A": "I_3_S_3.5_T_3.wav",
        "X": "I_3_S_3.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 7
    {
        "A": "C_1_S_1.5_T_1.8.wav",
        "X": "A_1_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 8
    {
        "A": "H_1_S_2_T_3.wav",
        "X": "H_3_S_2_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 9
    {
        "A": "G_2_S_2.5_T_0.6.wav",
        "X": "I_1_S_2.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 10
    {
        "A": "D_2_S_2.5_T_3.wav",
        "X": "D_3_S_2.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 11
    {
        "A": "F_3_S_1.5_T_2.wav",
        "X": "G_2_S_1.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 12
    {
        "A": "C_3_S_1_T_2.wav",
        "X": "A_3_S_1_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 13
    {
        "A": "F_2_S_3.5_T_2.wav",
        "X": "D_1_S_3.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 14
    {
        "A": "D_2_S_3.5_T_0.6.wav",
        "X": "F_2_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 15
    {
        "A": "I_3_S_1_T_2.wav",
        "X": "I_3_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 16
    {
        "A": "D_2_S_1_T_1.5.wav",
        "X": "F_1_S_1_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 17
    {
        "A": "F_1_S_1.5_T_0.6.wav",
        "X": "F_3_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 18
    {
        "A": "F_2_S_2.5_T_1.8.wav",
        "X": "F_2_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 19
    {
        "A": "I_1_S_1_T_2.wav",
        "X": "I_1_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 20
    {
        "A": "A_1_S_1_T_1.8.wav",
        "X": "H_2_S_1_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 21
    {
        "A": "I_1_S_2.5_T_1.5.wav",
        "X": "F_2_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 22
    {
        "A": "C_1_S_1.5_T_1.8.wav",
        "X": "A_1_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 23
    {
        "A": "D_3_S_3.5_T_2.wav",
        "X": "F_3_S_3.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 24
    {
        "A": "H_3_S_1.5_T_1.5.wav",
        "X": "F_2_S_1.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 25
    {
        "A": "H_3_S_2_T_1.8.wav",
        "X": "H_3_S_2_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 26
    {
        "A": "F_3_S_2_T_3.wav",
        "X": "D_2_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 27
    {
        "A": "A_1_S_1_T_3.wav",
        "X": "A_3_S_1_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 28
    {
        "A": "A_3_S_3.5_T_3.wav",
        "X": "A_3_S_3.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 29
    {
        "A": "C_1_S_2.5_T_1.5.wav",
        "X": "A_1_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 30
    {
        "A": "I_3_S_3.5_T_1.5.wav",
        "X": "H_3_S_3.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 31
    {
        "A": "C_1_S_1_T_0.6.wav",
        "X": "C_2_S_1_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 32
    {
        "A": "F_1_S_1.5_T_1.5.wav",
        "X": "F_2_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 33
    {
        "A": "G_3_S_3.5_T_0.6.wav",
        "X": "I_3_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 34
    {
        "A": "C_1_S_2.5_T_2.wav",
        "X": "C_1_S_2.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 35
    {
        "A": "I_1_S_3.5_T_0.6.wav",
        "X": "D_1_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 36
    {
        "A": "H_2_S_2.5_T_1.5.wav",
        "X": "H_2_S_2.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 37
    {
        "A": "F_2_S_3.5_T_1.8.wav",
        "X": "F_2_S_3.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 38
    {
        "A": "C_1_S_2_T_0.6.wav",
        "X": "D_1_S_2_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 39
    {
        "A": "D_2_S_1.5_T_0.6.wav",
        "X": "I_3_S_1.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 40
    {
        "A": "A_1_S_3.5_T_2.wav",
        "X": "A_3_S_3.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 41
    {
        "A": "A_1_S_2_T_1.5.wav",
        "X": "H_3_S_2_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 42
    {
        "A": "G_3_S_1.5_T_1.8.wav",
        "X": "I_3_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 43
    {
        "A": "F_2_S_3.5_T_3.wav",
        "X": "F_2_S_3.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 44
    {
        "A": "H_2_S_3.5_T_1.5.wav",
        "X": "G_1_S_3.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 45
    {
        "A": "A_3_S_1_T_3.wav",
        "X": "D_1_S_1_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 46
    {
        "A": "A_1_S_2.5_T_3.wav",
        "X": "A_1_S_2.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 47
    {
        "A": "C_1_S_3.5_T_2.wav",
        "X": "C_3_S_3.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 48
    {
        "A": "H_3_S_2_T_1.8.wav",
        "X": "D_1_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 49
    {
        "A": "F_3_S_2.5_T_0.6.wav",
        "X": "D_3_S_2.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 50
    {
        "A": "A_3_S_1.5_T_3.wav",
        "X": "A_2_S_1.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 51
    {
        "A": "I_3_S_1_T_1.5.wav",
        "X": "G_3_S_1_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 52
    {
        "A": "D_1_S_2.5_T_2.wav",
        "X": "F_1_S_2.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 53
    {
        "A": "D_1_S_1_T_1.8.wav",
        "X": "D_2_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 54
    {
        "A": "C_2_S_3.5_T_2.wav",
        "X": "D_2_S_3.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 55
    {
        "A": "I_2_S_2_T_3.wav",
        "X": "I_2_S_2_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 56
    {
        "A": "F_2_S_1.5_T_0.6.wav",
        "X": "F_2_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 57
    {
        "A": "D_1_S_2.5_T_1.8.wav",
        "X": "D_1_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 58
    {
        "A": "F_3_S_2.5_T_1.8.wav",
        "X": "F_3_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 59
    {
        "A": "G_2_S_1_T_0.6.wav",
        "X": "H_2_S_1_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 60
    {
        "A": "A_3_S_1_T_3.wav",
        "X": "C_3_S_1_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 61
    {
        "A": "G_1_S_1_T_2.wav",
        "X": "F_2_S_1_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 62
    {
        "A": "C_3_S_2.5_T_0.6.wav",
        "X": "H_1_S_2.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 63
    {
        "A": "F_2_S_1_T_1.5.wav",
        "X": "F_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 64
    {
        "A": "D_3_S_1.5_T_0.6.wav",
        "X": "D_3_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 65
    {
        "A": "C_2_S_1_T_3.wav",
        "X": "C_2_S_1_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 66
    {
        "A": "H_2_S_3.5_T_2.wav",
        "X": "H_3_S_3.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 67
    {
        "A": "H_1_S_1.5_T_3.wav",
        "X": "H_2_S_1.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 68
    {
        "A": "F_2_S_1.5_T_1.5.wav",
        "X": "D_2_S_1.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 69
    {
        "A": "D_3_S_2_T_1.8.wav",
        "X": "F_3_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 70
    {
        "A": "D_1_S_1.5_T_1.5.wav",
        "X": "D_1_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 71
    {
        "A": "I_2_S_3.5_T_1.5.wav",
        "X": "I_3_S_3.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 72
    {
        "A": "G_2_S_2_T_1.8.wav",
        "X": "H_2_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 73
    {
        "A": "D_3_S_1.5_T_0.6.wav",
        "X": "F_3_S_1.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 74
    {
        "A": "F_3_S_2_T_2.wav",
        "X": "D_3_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 75
    {
        "A": "A_3_S_3.5_T_1.5.wav",
        "X": "C_3_S_3.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 76
    {
        "A": "D_3_S_2_T_3.wav",
        "X": "F_3_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 77
    {
        "A": "A_1_S_1.5_T_2.wav",
        "X": "C_1_S_1.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 78
    {
        "A": "A_3_S_1.5_T_0.6.wav",
        "X": "C_3_S_1.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 79
    {
        "A": "I_2_S_2_T_3.wav",
        "X": "H_3_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 80
    {
        "A": "D_2_S_3.5_T_3.wav",
        "X": "F_3_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 81
    {
        "A": "A_3_S_2.5_T_1.5.wav",
        "X": "C_2_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 82
    {
        "A": "F_3_S_2_T_1.5.wav",
        "X": "F_3_S_2_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 83
    {
        "A": "C_2_S_2.5_T_1.8.wav",
        "X": "I_3_S_2.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 84
    {
        "A": "F_1_S_1.5_T_1.8.wav",
        "X": "F_1_S_1.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 85
    {
        "A": "H_2_S_1_T_3.wav",
        "X": "F_2_S_1_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 86
    {
        "A": "D_1_S_3.5_T_0.6.wav",
        "X": "D_1_S_3.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 87
    {
        "A": "G_2_S_2.5_T_1.5.wav",
        "X": "G_2_S_2.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 88
    {
        "A": "F_1_S_1_T_1.8.wav",
        "X": "F_1_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 89
    {
        "A": "I_2_S_1_T_1.5.wav",
        "X": "I_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 90
    {
        "A": "D_3_S_2.5_T_2.wav",
        "X": "F_1_S_2.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 91
    {
        "A": "H_3_S_2.5_T_1.5.wav",
        "X": "G_3_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 92
    {
        "A": "F_1_S_2_T_1.8.wav",
        "X": "A_2_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 93
    {
        "A": "G_1_S_1_T_1.5.wav",
        "X": "G_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 94
    {
        "A": "F_2_S_2_T_3.wav",
        "X": "D_2_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 95
    {
        "A": "F_3_S_2_T_2.wav",
        "X": "F_2_S_2_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 96
    {
        "A": "H_3_S_3.5_T_0.6.wav",
        "X": "H_3_S_3.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 97
    {
        "A": "I_1_S_2_T_0.6.wav",
        "X": "G_1_S_2_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 98
    {
        "A": "C_3_S_3.5_T_1.5.wav",
        "X": "A_3_S_3.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 99
    {
        "A": "H_1_S_2_T_2.wav",
        "X": "H_2_S_2_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 100
    {
        "A": "G_3_S_3.5_T_1.8.wav",
        "X": "G_3_S_3.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 101
    {
        "A": "F_1_S_2.5_T_3.wav",
        "X": "A_2_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 102
    {
        "A": "C_2_S_1.5_T_1.5.wav",
        "X": "C_3_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 103
    {
        "A": "D_1_S_2_T_3.wav",
        "X": "H_3_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 104
    {
        "A": "G_1_S_1_T_1.8.wav",
        "X": "G_1_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 105
    {
        "A": "C_1_S_2_T_0.6.wav",
        "X": "A_1_S_2_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 106
    {
        "A": "D_3_S_1.5_T_0.6.wav",
        "X": "D_1_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 107
    {
        "A": "F_3_S_2_T_0.6.wav",
        "X": "F_3_S_2_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 108
    {
        "A": "D_2_S_2_T_1.5.wav",
        "X": "F_2_S_2_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 109
    {
        "A": "D_3_S_2.5_T_3.wav",
        "X": "C_2_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 110
    {
        "A": "I_2_S_1_T_2.wav",
        "X": "I_3_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 111
    {
        "A": "H_2_S_1.5_T_1.8.wav",
        "X": "D_2_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 112
    {
        "A": "D_1_S_1.5_T_2.wav",
        "X": "D_1_S_1.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 113
    {
        "A": "F_3_S_3.5_T_2.wav",
        "X": "F_2_S_3.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 114
    {
        "A": "G_2_S_1_T_1.8.wav",
        "X": "G_2_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 115
    {
        "A": "H_2_S_2.5_T_3.wav",
        "X": "H_2_S_2.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 116
    {
        "A": "A_3_S_3.5_T_1.5.wav",
        "X": "A_2_S_3.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 117
    {
        "A": "F_1_S_1_T_1.5.wav",
        "X": "A_3_S_1_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 118
    {
        "A": "D_3_S_3.5_T_0.6.wav",
        "X": "D_1_S_3.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 119
    {
        "A": "G_3_S_2.5_T_1.5.wav",
        "X": "I_3_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 120
    {
        "A": "F_1_S_1_T_1.8.wav",
        "X": "G_1_S_1_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 121
    {
        "A": "F_2_S_1_T_1.5.wav",
        "X": "F_2_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 122
    {
        "A": "A_1_S_2_T_1.8.wav",
        "X": "C_1_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 123
    {
        "A": "H_3_S_2_T_2.wav",
        "X": "G_3_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 124
    {
        "A": "F_2_S_2_T_1.8.wav",
        "X": "D_2_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 125
    {
        "A": "A_2_S_1_T_3.wav",
        "X": "C_2_S_1_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 126
    {
        "A": "C_3_S_2.5_T_3.wav",
        "X": "A_3_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 127
    {
        "A": "A_2_S_1_T_3.wav",
        "X": "A_3_S_1_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 128
    {
        "A": "H_1_S_1.5_T_1.5.wav",
        "X": "H_3_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 129
    {
        "A": "I_3_S_3.5_T_3.wav",
        "X": "I_2_S_3.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 130
    {
        "A": "I_2_S_3.5_T_1.8.wav",
        "X": "I_2_S_3.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 131
    {
        "A": "D_1_S_3.5_T_3.wav",
        "X": "F_1_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 132
    {
        "A": "C_3_S_2.5_T_3.wav",
        "X": "G_3_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 133
    {
        "A": "C_3_S_2_T_2.wav",
        "X": "H_3_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 134
    {
        "A": "D_1_S_2.5_T_1.8.wav",
        "X": "A_2_S_2.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 135
    {
        "A": "D_1_S_1.5_T_2.wav",
        "X": "D_1_S_1.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 136
    {
        "A": "A_3_S_1_T_2.wav",
        "X": "C_3_S_1_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 137
    {
        "A": "F_2_S_1.5_T_1.8.wav",
        "X": "F_2_S_1.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 138
    {
        "A": "I_3_S_2_T_1.5.wav",
        "X": "I_1_S_2_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 139
    {
        "A": "D_3_S_1_T_2.wav",
        "X": "D_3_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 140
    {
        "A": "F_3_S_1_T_1.5.wav",
        "X": "F_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 141
    {
        "A": "F_1_S_3.5_T_0.6.wav",
        "X": "F_1_S_3.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 142
    {
        "A": "C_2_S_1.5_T_1.5.wav",
        "X": "C_1_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 143
    {
        "A": "F_1_S_1.5_T_1.5.wav",
        "X": "F_3_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 144
    {
        "A": "C_2_S_2_T_1.8.wav",
        "X": "A_2_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 145
    {
        "A": "A_2_S_1_T_1.5.wav",
        "X": "C_2_S_1_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 146
    {
        "A": "I_3_S_2_T_2.wav",
        "X": "G_3_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 147
    {
        "A": "A_2_S_1_T_2.wav",
        "X": "A_1_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 148
    {
        "A": "G_1_S_3.5_T_3.wav",
        "X": "H_1_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 149
    {
        "A": "G_1_S_2.5_T_1.8.wav",
        "X": "D_3_S_2.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 150
    {
        "A": "A_2_S_2_T_2.wav",
        "X": "C_2_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 151
    {
        "A": "G_2_S_2_T_0.6.wav",
        "X": "G_2_S_2_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 152
    {
        "A": "A_3_S_3.5_T_0.6.wav",
        "X": "C_3_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 153
    {
        "A": "A_2_S_1_T_1.5.wav",
        "X": "A_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 154
    {
        "A": "C_1_S_2.5_T_3.wav",
        "X": "A_1_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 155
    {
        "A": "C_3_S_1_T_0.6.wav",
        "X": "C_3_S_1_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 156
    {
        "A": "I_1_S_3.5_T_0.6.wav",
        "X": "G_1_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 157
    {
        "A": "F_2_S_1.5_T_0.6.wav",
        "X": "F_1_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 158
    {
        "A": "D_3_S_2.5_T_1.8.wav",
        "X": "D_3_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 159
    {
        "A": "I_1_S_1_T_1.5.wav",
        "X": "I_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 160
    {
        "A": "D_3_S_2.5_T_1.8.wav",
        "X": "C_2_S_2.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 161
    {
        "A": "D_3_S_2.5_T_1.8.wav",
        "X": "D_3_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 162
    {
        "A": "F_3_S_2.5_T_1.8.wav",
        "X": "A_2_S_2.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 163
    {
        "A": "G_1_S_1_T_0.6.wav",
        "X": "G_2_S_1_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 164
    {
        "A": "F_3_S_3.5_T_0.6.wav",
        "X": "D_3_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 165
    {
        "A": "H_3_S_1.5_T_0.6.wav",
        "X": "I_3_S_1.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 166
    {
        "A": "H_3_S_2.5_T_0.6.wav",
        "X": "A_3_S_2.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 167
    {
        "A": "I_3_S_2_T_0.6.wav",
        "X": "I_3_S_2_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 168
    {
        "A": "C_2_S_1.5_T_2.wav",
        "X": "C_1_S_1.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 169
    {
        "A": "F_2_S_1_T_1.8.wav",
        "X": "F_2_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 170
    {
        "A": "D_2_S_2.5_T_3.wav",
        "X": "F_3_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 171
    {
        "A": "H_2_S_1_T_2.wav",
        "X": "H_1_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 172
    {
        "A": "G_2_S_2_T_1.8.wav",
        "X": "A_1_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 173
    {
        "A": "F_1_S_1.5_T_0.6.wav",
        "X": "D_1_S_1.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 174
    {
        "A": "I_1_S_3.5_T_0.6.wav",
        "X": "I_1_S_3.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 175
    {
        "A": "H_3_S_2.5_T_1.5.wav",
        "X": "H_3_S_2.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 176
    {
        "A": "H_1_S_3.5_T_2.wav",
        "X": "H_3_S_3.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 177
    {
        "A": "I_2_S_2_T_3.wav",
        "X": "C_3_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 178
    {
        "A": "D_2_S_2_T_0.6.wav",
        "X": "F_2_S_2_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 179
    {
        "A": "C_3_S_3.5_T_0.6.wav",
        "X": "A_2_S_3.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 180
    {
        "A": "G_2_S_2_T_1.8.wav",
        "X": "G_2_S_2_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 181
    {
        "A": "D_3_S_2_T_3.wav",
        "X": "D_3_S_2_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 182
    {
        "A": "D_3_S_2.5_T_3.wav",
        "X": "F_3_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 183
    {
        "A": "C_1_S_1_T_2.wav",
        "X": "C_3_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 184
    {
        "A": "D_2_S_1_T_3.wav",
        "X": "D_1_S_1_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 185
    {
        "A": "C_3_S_1.5_T_1.8.wav",
        "X": "A_1_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 186
    {
        "A": "A_3_S_1_T_2.wav",
        "X": "A_2_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 187
    {
        "A": "F_2_S_1.5_T_2.wav",
        "X": "F_2_S_1.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 188
    {
        "A": "C_2_S_1.5_T_2.wav",
        "X": "H_3_S_1.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 189
    {
        "A": "G_1_S_2_T_1.5.wav",
        "X": "G_2_S_2_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 190
    {
        "A": "A_3_S_2_T_1.8.wav",
        "X": "A_1_S_2_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 191
    {
        "A": "F_2_S_1.5_T_3.wav",
        "X": "F_3_S_1.5_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 192
    {
        "A": "H_2_S_1.5_T_0.6.wav",
        "X": "H_2_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 193
    {
        "A": "D_1_S_2_T_1.8.wav",
        "X": "F_2_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 194
    {
        "A": "F_3_S_1.5_T_1.5.wav",
        "X": "F_2_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 195
    {
        "A": "C_1_S_2.5_T_1.5.wav",
        "X": "C_2_S_2.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 196
    {
        "A": "C_1_S_1.5_T_1.8.wav",
        "X": "A_3_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 197
    {
        "A": "D_2_S_3.5_T_3.wav",
        "X": "C_3_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 198
    {
        "A": "D_1_S_2_T_2.wav",
        "X": "D_3_S_2_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 199
    {
        "A": "G_3_S_1_T_3.wav",
        "X": "G_3_S_1_T_3.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 200
    {
        "A": "I_3_S_1_T_2.wav",
        "X": "I_2_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 201
    {
        "A": "A_2_S_1.5_T_1.8.wav",
        "X": "D_2_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 202
    {
        "A": "C_2_S_1_T_0.6.wav",
        "X": "A_2_S_1_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 203
    {
        "A": "H_3_S_3.5_T_1.8.wav",
        "X": "D_2_S_3.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 204
    {
        "A": "A_2_S_3.5_T_2.wav",
        "X": "H_3_S_3.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 205
    {
        "A": "F_1_S_3.5_T_2.wav",
        "X": "F_1_S_3.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 206
    {
        "A": "C_1_S_2_T_2.wav",
        "X": "C_1_S_2_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 207
    {
        "A": "I_2_S_2.5_T_1.5.wav",
        "X": "C_2_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 208
    {
        "A": "G_2_S_2.5_T_1.8.wav",
        "X": "G_3_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 209
    {
        "A": "A_1_S_1_T_1.8.wav",
        "X": "A_1_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 210
    {
        "A": "G_3_S_1.5_T_0.6.wav",
        "X": "G_3_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 211
    {
        "A": "D_2_S_3.5_T_3.wav",
        "X": "A_1_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 212
    {
        "A": "D_1_S_1.5_T_2.wav",
        "X": "D_2_S_1.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 213
    {
        "A": "G_1_S_2_T_3.wav",
        "X": "I_1_S_2_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 214
    {
        "A": "F_3_S_1.5_T_3.wav",
        "X": "I_3_S_1.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 215
    {
        "A": "H_3_S_1_T_2.wav",
        "X": "H_3_S_1_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 216
    {
        "A": "G_2_S_3.5_T_1.5.wav",
        "X": "I_2_S_3.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 217
    {
        "A": "C_2_S_1.5_T_1.5.wav",
        "X": "C_3_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 218
    {
        "A": "D_3_S_2_T_1.5.wav",
        "X": "F_3_S_2_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 219
    {
        "A": "H_1_S_1.5_T_0.6.wav",
        "X": "H_3_S_1.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 220
    {
        "A": "D_1_S_3.5_T_3.wav",
        "X": "F_1_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 221
    {
        "A": "D_1_S_1.5_T_1.8.wav",
        "X": "I_3_S_1.5_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 222
    {
        "A": "D_2_S_2.5_T_1.8.wav",
        "X": "D_2_S_2.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 223
    {
        "A": "D_3_S_1_T_3.wav",
        "X": "D_2_S_1_T_3.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 224
    {
        "A": "I_2_S_2.5_T_2.wav",
        "X": "I_2_S_2.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 225
    {
        "A": "C_1_S_2_T_1.8.wav",
        "X": "A_2_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 226
    {
        "A": "G_3_S_3.5_T_0.6.wav",
        "X": "G_1_S_3.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 227
    {
        "A": "C_3_S_3.5_T_3.wav",
        "X": "A_3_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 228
    {
        "A": "I_3_S_3.5_T_1.5.wav",
        "X": "I_1_S_3.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 229
    {
        "A": "F_2_S_1_T_1.8.wav",
        "X": "F_2_S_1_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 230
    {
        "A": "F_2_S_2.5_T_2.wav",
        "X": "F_1_S_2.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 231
    {
        "A": "H_3_S_2_T_0.6.wav",
        "X": "H_1_S_2_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 232
    {
        "A": "F_1_S_2.5_T_0.6.wav",
        "X": "D_2_S_2.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 233
    {
        "A": "D_1_S_2.5_T_0.6.wav",
        "X": "D_3_S_2.5_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 234
    {
        "A": "F_3_S_1.5_T_1.8.wav",
        "X": "F_3_S_1.5_T_1.8.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 235
    {
        "A": "A_3_S_2_T_1.8.wav",
        "X": "F_3_S_2_T_1.8.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 236
    {
        "A": "D_1_S_3.5_T_2.wav",
        "X": "F_1_S_3.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 237
    {
        "A": "G_2_S_2.5_T_1.5.wav",
        "X": "I_2_S_2.5_T_1.5.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 238
    {
        "A": "D_1_S_1.5_T_1.5.wav",
        "X": "D_3_S_1.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 239
    {
        "A": "D_1_S_2.5_T_3.wav",
        "X": "F_1_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 240
    {
        "A": "C_1_S_1.5_T_0.6.wav",
        "X": "A_3_S_1.5_T_0.6.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 241
    {
        "A": "I_1_S_2.5_T_2.wav",
        "X": "H_1_S_2.5_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 242
    {
        "A": "A_1_S_1_T_0.6.wav",
        "X": "A_1_S_1_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 243
    {
        "A": "G_3_S_2_T_0.6.wav",
        "X": "G_2_S_2_T_0.6.wav",
        "melody_same": "same",
        "lyric_same": "different"
    },

    // Trial 244
    {
        "A": "C_2_S_2_T_2.wav",
        "X": "A_2_S_2_T_2.wav",
        "melody_same": "different",
        "lyric_same": "same"
    },

    // Trial 245
    {
        "A": "F_3_S_1_T_1.5.wav",
        "X": "F_3_S_1_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 246
    {
        "A": "G_2_S_3.5_T_3.wav",
        "X": "H_3_S_3.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 247
    {
        "A": "F_1_S_1.5_T_2.wav",
        "X": "F_1_S_1.5_T_2.wav",
        "melody_same": "same",
        "lyric_same": "same"
    },

    // Trial 248
    {
        "A": "H_3_S_2.5_T_3.wav",
        "X": "F_2_S_2.5_T_3.wav",
        "melody_same": "different",
        "lyric_same": "different"
    },

    // Trial 249
    {
        "A": "H_3_S_2.5_T_1.5.wav",
        "X": "H_1_S_2.5_T_1.5.wav",
        "melody_same": "same",
        "lyric_same": "different"
    }

];

const trials_per_block = 50;
var blocks = [];

// 随机打乱所有trial并分配到5个block
jsPsych.randomization.shuffle(ax_trials);
for (var i = 0; i < 5; i++) {
    blocks.push(ax_trials.slice(i * trials_per_block, (i + 1) * trials_per_block));
}

var subject_id = jsPsych.randomization.randomID(7);
var timeline = [];

/*/##########################################################################/*/
/*/###                                                                     ###*/
/*/###                             Timeline                                ###*/
/*/###                                                                     ###*/
/*/##########################################################################/*/

var preload = {
    type: jsPsychPreload,
    auto_preload: true
}

var info = {
    type: jsPsychSurveyText,
    questions: [
        { prompt: "您的姓名是？", rows: 2, columns: 50, required: true },
        { prompt: "您的年龄是？", rows: 1, columns: 50, required: true },
        { prompt: "您的性别是？", rows: 1, columns: 50, require: true },
    ],
    preamble: `<p>请输入您的个人信息，这些信息会做匿名化处理，感谢您的配合。</p>`,
    button_label: ['确认'],
};

var task_instruction = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        <div><font size=120%; font color='green';>实验说明</font><br/>
        <br><br/>
        <div style="text-align-last:left">
        在本实验中，您将听到两段旋律（A和X）。<br/>
        之后您需要回答两个问题：<br/><br/>
        1. 两段旋律是否一致？<br/>
        2. 两段歌词是否一致？<br/><br/>
        每个问题都会随机出现，请根据问题指示按键：<br/>
        - 一致：按 <b>F</b> 键<br/>
        - 不一致：按 <b>J</b> 键<br/>
        </div>
        <br><br/>
        <font size=5px;>当您准备好时，按下<b>空格键</b>开始练习。</font></div>
        <br><br/>
        `,
    choices: " ",
}

var fixation = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: '<div style="font-size:60px;">+</div>',
    choices: "NO_KEYS",
    trial_duration: 500,
};

var block_instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        return `
            <div><font size=120%; font color='green';>第 ${jsPsych.timelineVariable('block_index') + 1}/5 组实验</font><br/>
            <br><br/>
            每组包含50个测试。<br/>
            请集中注意力，根据听到的内容回答问题。<br/>
            <br><br/>
            <font size=5px;>当您准备好时，按下<b>空格键</b>开始。</font></div>
            <br><br/>
        `;
    },
    choices: " ",
    data: { block: jsPsych.timelineVariable('block_index') }
};

var block_break = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: function () {
        return `
            <div><font size=120%; font color='green';>休息一下</font><br/>
            <br><br/>
            您已完成第 ${jsPsych.timelineVariable('block_index') + 1}/6 组实验。<br/>
            请短暂休息，准备好后继续。<br/>
            <br><br/>
            <font size=5px;>按下<b>空格键</b>继续下一组。</font></div>
            <br><br/>
        `;
    },
    choices: " ",
    data: { block: jsPsych.timelineVariable('block_index') }
};

function createAXTrial(trial) {
    var trial_timeline = [];

    // 注视点
    trial_timeline.push(fixation);

    // 播放A段旋律
    trial_timeline.push({
        type: jsPsychAudioKeyboardResponse,
        stimulus: `stimuli/wav/${trial.A}`,
        choices: "NO_KEYS",
        trial_duration: null // 自动根据音频长度结束
    });

    // 播放X段旋律
    trial_timeline.push({
        type: jsPsychAudioKeyboardResponse,
        stimulus: `stimuli/wav/${trial.X}`,
        choices: "NO_KEYS",
        trial_duration: null // 自动根据音频长度结束
    });

    // 创建两个问题（随机顺序）
    var questions = [
        {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<div style="font-size:24px;">两段旋律是否一致？<br><br>（一致按F，不一致按J）</div>`,
            choices: ['f', 'j'],
            data: {
                question_type: 'melody',
                correct_response: trial.melody_match ? 'f' : 'j',
                trial_id: trial.A + "_" + trial.X
            },
            on_finish: function (data) {
                data.correct = data.response === data.correct_response;
            }
        },
        {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `<div style="font-size:24px;">两段歌词是否一致？<br><br>（一致按F，不一致按J）</div>`,
            choices: ['f', 'j'],
            data: {
                question_type: 'lyrics',
                correct_response: trial.lyrics_match ? 'f' : 'j',
                trial_id: trial.A + "_" + trial.X
            },
            on_finish: function (data) {
                data.correct = data.response === data.correct_response;
            }
        }
    ];

    // 随机化问题顺序
    trial_timeline.push({
        timeline: questions,
        randomize_order: true
    });

    return trial_timeline;
}

// 创建block时间线
var block_timeline = {
    timeline: [
        block_instructions,
        {
            timeline: function () {
                var block = jsPsych.timelineVariable('trials');
                var timeline = [];

                for (var i = 0; i < block.length; i++) {
                    timeline = timeline.concat(createAXTrial(block[i]));
                }

                return timeline;
            }
        },
        block_break
    ],
    timeline_variables: blocks.map(function (block, index) {
        return {
            trials: block,
            block_index: index
        };
    }),
    randomize_order: false
};

// 结束语
var end_instructions = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
        <div> <font size=120%; font color='green';>实验完成</font><br/>
        <br><br/>
        感谢您的参与！<br/>
        您的数据已保存。<br/>
        <br><br/>
        请按空格键结束实验。</div>
    `,
    choices: " ",
}

// 组装完整的时间线
timeline.push(preload);
timeline.push(info);
timeline.push(task_instruction);
timeline.push(block_timeline);
timeline.push(end_instructions);

// 开始实验
jsPsych.run(timeline);