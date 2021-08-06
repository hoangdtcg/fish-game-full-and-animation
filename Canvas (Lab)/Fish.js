class Fish {
    constructor(x, y, size, color, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = speed;
        this.direct = "right";
        this.image = "";

    }

    init() {
        let fishIds = [1, 2, 3, 4];
        let fishSizes = [
            [50, 25],
            [75, 40],
            [100, 76],
            [150, 65]
        ]
        let rand = Math.floor(Math.random() * fishIds.length);
        let srcImg = `images/fish/fish_${fishIds[rand]}_${this.direct}.png`;
        this.image = new Image();
        this.image.src = srcImg;
        this.width = fishSizes[rand][0];
        this.height = fishSizes[rand][1];
        // let img = new Image();
        // img.src = this.image;
        console.log(this.image.height);
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    move() {
        switch (this.direct) {
            case "right":
                this.moveRight();
                break;
            case "left":
                this.moveLeft();
                break;
            default:
                this.moveRight();
        }
    }

    render(paper) {
        let pen = paper.getContext('2d');
        pen.beginPath();
        pen.rect(this.x, this.y, this.size, this.size)
        pen.stroke();
        pen.fillStyle = this.color;
        pen.fill();
        pen.closePath();
    }

    renderImg(paper) {
        let pen = paper.getContext('2d');
        pen.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}