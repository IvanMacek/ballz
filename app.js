(function(){

    AFRAME.registerComponent('event-handler', {
        init: function(){
            let ball = this.el; // <a-sphere>
            ball.addEventListener('click', function(){
                ball.setAttribute('color', 'green');
            });
        } 
    });

})()