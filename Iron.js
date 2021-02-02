class Iron {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.5,
            friction: 2,
            density: 1
        };
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.height = height;
        this.width = width;
        World.add(world, this.box);
    }

    display() {
        var pos2 = this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos2.x, pos2.y);
        rotate(angle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();
    }

}