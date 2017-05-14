(function(CANNON){

    window.onkeyup = (event) => {
        if(event.keyCode !== 32) return;

        const player = document.querySelector('a-camera');
        const ball = document.querySelector('a-sphere');

        let playerVector = new CANNON.Vec3().copy(player.getAttribute('position'));
        let ballVector = new CANNON.Vec3().copy(ball.getAttribute('position'));
        let newBallVector = ballVector.vsub(playerVector);
        newBallVector.y = 0;
        newBallVector.normalize();
        newBallVector.y = -3;

        ball.body.applyImpulse(
            newBallVector.scale(40),
            ballVector
        );
    }

})(CANNON)