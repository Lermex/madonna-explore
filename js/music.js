document.addEventListener('DOMContentLoaded', () => {
    var ctx = document.createElement('canvas').getContext('2d');
    var linGrad = ctx.createLinearGradient(0, 64, 0, 200);
    linGrad.addColorStop(1, '#c9f1fd');


    var tracks = [
        'https://madonna-explore.ams3.digitaloceanspaces.com/Hollie_Cook_-_01_-_Angel_Fire.mp3',
        'https://madonna-explore.ams3.digitaloceanspaces.com/Hollie_Cook_-_02_-_Ghostly_Fading.mp3',
        'https://madonna-explore.ams3.digitaloceanspaces.com/Hollie_Cook_-_03_-_Lunar_Addiction.mp3',
        'https://madonna-explore.ams3.digitaloceanspaces.com/Hollie_Cook_-_04_-_Together.mp3',
        'https://madonna-explore.ams3.digitaloceanspaces.com/Hollie_Cook_-_05_-_Stay_Alive.mp3',
        'https://madonna-explore.ams3.digitaloceanspaces.com/hollie-cook_-_ari-up.mp3',
        'https://madonna-explore.ams3.digitaloceanspaces.com/hollie-cook_-_looking-for-real-love.mp3'
    ];

    var wavesurfer;

    [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(function (index) {
        var button = document.getElementById('play' + (index + 1));

        button.addEventListener('click', () => {
            if (button.classList.contains('playing')) {
                wavesurfer.pause();
            } else {
                if (!wavesurfer) {
                    wavesurfer = WaveSurfer.create({
                        container: '#waveform1',
                        waveColor: linGrad,
                        progressColor: '#00cbff',
                        cursorColor: '#fff',
                        barWidth: 6,
                        barHeight: 2,
                        height: 64
                    });
                    wavesurfer.load(tracks[index]);
                    wavesurfer.on('ready', function () {
                        wavesurfer.play();
                    });
                }

                wavesurfer.play();
            }

            button.classList.toggle('playing');
        });
    });


});
