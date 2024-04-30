fetch(`https://leaderboard.goldenedit.workers.dev/top10`)
    .then(response => response.json())
    .then(data => {
        let total = 0;
        for (const uuid in data) {
            total += 1
            if (data.hasOwnProperty(uuid)) {
                const points = data[uuid];
                const pointsElement = document.getElementById(`${total}pts`);
                getUsername(uuid, total);
                getHead(uuid, total);
                pointsElement.innerText = points;
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

function getUsername(UUID, rank) {
    fetch(`https://api.minetools.eu/uuid/${UUID}`)
        .then(response => response.json())
        .then(data => {
            const latestName = data.name;
            const usernameElement = document.getElementById(rank);
            usernameElement.innerText = latestName;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function getHead(UUID, rank) {
    const element = document.getElementById(`${rank}head`);
    element.src = `https://mc-heads.net/head/${UUID}`;
}

function individualSearch() {
    const username = document.getElementById("playerSearch");
    const element = document.getElementById("top10");
    fetch(`https://leaderboard.goldenedit.workers.dev/player/${username.value}`)
        .then(response => response.json())
        .then(data => {
            const points = data.points;
            const pointsElement = document.getElementById("playerSearchpts");
            const rankElement = document.getElementById("playerSearchRank");
            const uuid = data.uuid
            getUsername(uuid, "playerSearchName");
            pointsElement.innerText = points;
            rankElement.innerText = data.rank;

            const headElement = document.getElementById("playerSearchHead");
            headElement.src = `https://mc-heads.net/head/${uuid}`;
            element.classList.toggle("hidden");
            const playerSearchItem = document.getElementById("playerSearchItem");
            if (playerSearchItem.classList.contains('hidden')) {
                playerSearchItem.classList.toggle("hidden");
            }
            element.classList.toggle('hidden');
        }
        )
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("errormsg").classList.toggle("hidden");
            setTimeout(function () {
                if (document.getElementById("errormsg").classList.contains("hidden") == false) {
                    document.getElementById("errormsg").classList.toggle("hidden");
                }
            }, 5000);
        });
}
