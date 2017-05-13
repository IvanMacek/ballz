(function(){

    AFRAME.registerComponent('throw-ball', {
        init: function(){
            let ball = this.el; // <a-sphere>
            ball.addEventListener('click', function(){
                let vector = new CANNON.Vec3(0, 0, -1);
                ball.body.applyImpulse(
                    vector.scale(2),
                    new CANNON.Vec3().copy(ball.getAttribute('position'))
                )
            });
        } 
    });

})()