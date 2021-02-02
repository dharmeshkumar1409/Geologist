class Hammer {
    constructor(x, y) {
        var options = {
            restitution: 0.5,
            friction: 1.0,
            density: 2.0
        };
        this.hammer = Bodies.rectangle(x, y, 100, 50, options);
        this.height = 50;
        this.width = 100;
        World.add(world, this.hammer);
    }

    display() {
        this.hammer.position.x = mouseX;
        this.hammer.position.y = mouseY;
        var angle = this.hammer.angle;
        push();
        translate(this.hammer.position.x, this.hammer.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
    }

}