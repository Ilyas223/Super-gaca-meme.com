// Daftar hadiah dengan tingkat kesulitan berbeda
const rewards = [
    { name: "Alkha Mulet", chance: 0.6 },
    { name: "Fadli Salto", chance: 0.25 },
    { name: "Si Jomok", chance: 0.1 },
    { name: "Super Fadli", chance: 0.04 },
    { name: "Padlikin", chance: 0.01 },
];

// Data untuk papan peringkat
let leaderboard = [];

// Fungsi gacha
function gacha() {
    let random = Math.random();
    let cumulativeChance = 0;
    let selectedReward = null;

    for (let reward of rewards) {
        cumulativeChance += reward.chance;
        if (random < cumulativeChance) {
            selectedReward = reward.name;
            break;
        }
    }

    // Tampilkan hadiah yang diperoleh
    document.getElementById("reward").innerText = `You got: ${selectedReward}`;

    // Update papan peringkat
    updateLeaderboard(selectedReward);
}

// Fungsi untuk memperbarui papan peringkat
function updateLeaderboard(reward) {
    leaderboard.push(reward);
    leaderboard.sort((a, b) => rewards.findIndex(r => r.name === a) - rewards.findIndex(r => r.name === b));
    
    let leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = leaderboard.map((reward, index) => `<li>${index + 1}. ${reward}</li>`).join("");
}
