class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 0;
        this.height = 0;
        this.speed = 10;
        this.direct = "right";
        this.imageSrc = "images/fish/fish_right.gif";
    }

    init() {
        let img = new Image();
        img.src = this.imageSrc;
        this.width = img.width / 1.5;
        this.height = img.height / 1.5;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }
    moveDown() {
        this.y += this.speed;
    }

    move() {
        switch (this.direct) {
            case "right":
                this.imageSrc = `images/fish/fish_right.gif`;
                this.moveRight();
                break;
            case "left":
                this.imageSrc = `images/fish/fish_left.gif`;
                this.moveLeft();
                break;
            case "up":
                this.moveUp();
                break;
            case "down":
                this.moveDown();
                break;
            default:
                this.imageSrc = `images/fish/fish_right.gif`;
                this.moveRight();
        }
    }

    renderImg(paper) {
        let pen = paper.getContext('2d');
        let img = new Image();
        img.src = this.imageSrc;
        pen.drawImage(img, this.x, this.y, this.width, this.height);
    }
}