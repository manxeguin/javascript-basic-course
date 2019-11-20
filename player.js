Player = function(domElement) {
    this.domElement = domElement;
    this.currentMove = 'idle';
    this.animationFrame;
    this.domElement.style.left = '150px';
    this.domElement.style.top = '480px';
}

Player.prototype.right = function() {
    this.domElement.classList.remove('idle');
    this.domElement.classList.add('right');
    this.currentMove = 'right';
    this.domElement.style.left = parseInt(this.domElement.style.left, 10) + 3 + 'px';
    this.animationFrame = requestAnimationFrame(this.right.bind(this));
}

Player.prototype.left = function() {
    this.domElement.classList.remove('idle');
    this.domElement.classList.add('left');
    this.currentMove = 'left';
    this.domElement.style.left = parseInt(this.domElement.style.left, 10) - 3 + 'px';
    this.animationFrame = requestAnimationFrame(this.left.bind(this));
}

Player.prototype.idle = function() {
    this.domElement.classList.remove('right');
    this.domElement.classList.remove('left');
    this.domElement.classList.add('idle');
    this.currentMove = 'idle';
    this.currentMoveKey = null;
    cancelAnimationFrame(this.animationFrame);
}