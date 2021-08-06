class Game {
    constructor() {
        this.fishs = [];
        this.score = 0;

        this.time = 0;
        this.reloadTime = 10;
    }

    creatUI() {
        this.paper = document.createElement('canvas');
        this.paper.width = 800;
        this.paper.height = 600;
        this.paper.style.backgroundColor = "lightgray";
        document.body.append(this.paper);

        this.scoreUI = document.createElement('span');
        this.scoreUI.innerHTML = "Score";
        this.scoreUI.style.position = "absolute";
        this.scoreUI.style.left = "20px";
        this.scoreUI.style.top = "20px";
        document.body.append(this.scoreUI);
    }

    init() {
        this.creatUI();
        this.player = new Player(this.paper.width / 2, this.paper.height / 2);
        this.player.init();
        // this.createFishs(10);
    }

    createFishs(number) {
        for (let i = 0; i < number; i++) {
            let x = (Math.random() > 0.5) ? this.randomNumber(this.paper.width, this.paper.width + 100) : this.randomNumber(-100, 0);
            let y = this.randomNumber(0, this.paper.height - 200);
            let size = this.randomNumber(30, 100);
            let color = this.randomColor();
            let speed = this.randomNumber(4, 15)

            let fish = new Fish(x, y, size, color, speed);
            (fish.x > this.paper.width / 2) ? fish.direct = "left": fish.direct = "right";
            fish.init();
            this.fishs.push(fish);
        }
    }

    createFish() {
        this.time++;
        if (this.time > this.reloadTime) {
            let x = (Math.random() > 0.5) ? this.randomNumber(this.paper.width, this.paper.width + 100) : this.randomNumber(-100, 0);
            let y = this.randomNumber(0, this.paper.height - 200);
            let size = this.randomNumber(30, 100);
            let color = this.randomColor();
            let speed = this.randomNumber(4, 15)

            let fish = new Fish(x, y, size, color, speed);
            (fish.x > this.paper.width / 2) ? fish.direct = "left": fish.direct = "right";
            fish.init();
            this.fishs.push(fish);
            this.time = 0;
        }
    }

    renderFish() {
        for (let i = 0; i < this.fishs.length; i++) {
            this.fishs[i].renderImg(this.paper);
        }
    }

    moveFish() {
        for (let i = 0; i < this.fishs.length; i++) {
            this.fishs[i].move();
        }
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    randomColor() {
        let r = this.randomNumber(0, 255);
        let g = this.randomNumber(0, 255);
        let b = this.randomNumber(0, 255);

        return `rgb(${r},${g},${b})`; //rgb(100,200,100);
    }

    clearScreen() {
        let pen = this.paper.getContext('2d');
        pen.clearRect(0, 0, this.paper.width, this.paper.height);
    }

    isCrash(obj1, obj2) {
        let left1 = obj1.x;
        let right1 = obj1.x + obj1.width;
        let top1 = obj1.y;
        let bottom1 = obj1.y + obj1.height;

        let left2 = obj2.x;
        let right2 = obj2.x + obj2.width;
        let top2 = obj2.y;
        let bottom2 = obj2.y + obj2.height;
        if (left1 > right2 || right1 < left2 || bottom1 < top2 || top1 > bottom2) {
            return false;
        } else {
            return true;
        }

    }

    checkCrash() {
        for (let i = 0; i < this.fishs.length; i++) {
            if (this.isCrash(this.player, this.fishs[i]) == true) {
                this.fishs.splice(i, 1);
                i--;
                this.upScore();
            }

            if (this.fishs[i].x > 2000 || this.fishs[i].x < -2000) {
                this.fishs.splice(i, 1);
                i--;
            }
        }
    }

    upScore() {
        this.score += 1;
        this.scoreUI.innerHTML = "Score: " + this.score;
    }



    // main() {
    //     this.clearScreen();
    //     this.moveFish();
    //     this.renderFish();
    //     this.player.renderImg(this.paper)
    // }
}