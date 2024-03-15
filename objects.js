// ak type == 0, tak pasmo je vodive,
// ak type == 1, tak pasmo je valencne
function Band(x, y, type) {
    this.x = x;
    this.y = y;
    this.height = 80;
    this.type = type;
}

// ak typ == 0, tak je to elektron
// ak typ == 1, tak je to diera
function Dot(x, y, type) {
    this.x = x;
    this.y = cH - y;
    this.travel = 0;
    this.type = type;
    this.radius = 15;

    this.getY = function() {
        return this._y;
    };
}
function Line(x,type) {
    this.x = x;
    this.y = cH;
    this.type = type;
}

// ak typ == 0, tak je to donor
// ak typ == 1, tak je to akceptor
function Orbital(x, y, type)
{
    this.x = x;
    this.y = y;
    this.type = type;
    this.height = 35;
    this.width = 35;
}

Line.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.lineWidth = 3;

    if (this.type === 0) {
        // Draw blue line for type 0
        ctx.strokeStyle = 'blue';
        ctx.moveTo(20, 0);
        ctx.lineTo(20, cH);

        // Draw minus sign
        ctx.fillStyle = '#0000ff';
        ctx.font = '40px Arial';
        ctx.fillText('-', 23, 23);
    } else if (this.type === 1) {
        // Draw red line for type 1
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ff0000';
        ctx.moveTo(297, 0);
        ctx.lineTo(297, cH);

        // Draw plus sign
        ctx.font = '40px Arial';
        ctx.fillStyle = '#ff0000';
        ctx.fillText('+', 273, 23);
    }

    ctx.stroke();
    ctx.closePath();
};


//pasma su rovnake pre vsetky canvasy
Band.prototype.draw = function (ctx) {
    var distance = 20;
    ctx.beginPath();
    ctx.setLineDash([]);
    if (this.type == 1) {
        var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
        my_gradient.addColorStop(1, "rgba(255,255,192,0.5)");
        my_gradient.addColorStop(0.45, "rgba(255,255,192,0.5)");
        my_gradient.addColorStop(0, "#ffffff");
        ctx.fillStyle = my_gradient;
        // ciarky
        ctx.moveTo(20, distance);
        ctx.lineTo(cW, distance);
        ctx.moveTo(20, distance * 2);
        ctx.lineTo(cW, distance * 2);
        ctx.moveTo(20, distance * 3);
        ctx.lineTo(cW, distance * 3);
    } else if (this.type == 0) {
        var my_gradient = ctx.createLinearGradient(0, cH - 100, 0, 400);
        my_gradient.addColorStop(1, "#ffffff");
        my_gradient.addColorStop(0.80, "#ffffff");
        my_gradient.addColorStop(0, "#fff721");
        ctx.fillStyle = my_gradient;
        // ciarky
        ctx.moveTo(20, cH - distance);
        ctx.lineTo(300, cH - distance);
        ctx.moveTo(20, cH - distance * 2);
        ctx.lineTo(300, cH - distance * 2);
        ctx.moveTo(20, cH - distance * 3);
        ctx.lineTo(300, cH - distance * 3);
    }

    ctx.fillRect(20, this.y, cW, this.height);
    ctx.lineWidth = "1";
    ctx.strokeStyle = '#cdcdcd';
    ctx.stroke();
    ctx.lineWidth = "1";
    ctx.fillStyle = "#000000";
    ctx.font = "14px Arial";

    //vypis energie
    if (this.type == 0) {
        ctx.fillText("Ev", this.x, this.y + 10);
    } else if (this.type == 1)
    {
        ctx.fillText("Ec", this.x, this.y + 80);
    }
    ctx.closePath();
};

//elektrony a diery su rovnake pre vsetky canvasy
Dot.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.lineWidth = "3";
    ctx.fillStyle = "#000000";
    ctx.font = "30px Arial";
    if (this.type == 0) {
        ctx.strokeStyle = '#0000ff';
        ctx.fillText("–", this.x - 9, this.y + 8);
    } else if (this.type == 1) {
        ctx.strokeStyle = '#ff0000';
        ctx.fillText("+", this.x - 9, this.y + 11);
    }
    ctx.stroke();
    ctx.lineWidth = "1";
    ctx.closePath();
};

Dot.prototype.transportation = function () {
    var dis = 0;
    if (this.type == 0) {
        dis = 20;
    } else if (this.type == 1) {
        dis = cH - 20;
    }
    if (this.y != dis) {
        this.y--;
        this.travel++;
    }
};
//pohyb dolava a doprava
Dot.prototype.transportation_right_left = function () {
    var dis = 0;
    if (this.type == 0) {
        dis = cW - 5;
        if (this.x != dis) {
            this.x++;
        }else
            this.x = this.x + 50;
    }
    if (this.type == 1) {
        dis = 25;
        if (this.x != dis) {
            this.x--;
        }else
        this.x = this.x - 50;
    }
};

Dot.prototype.transportationBack = function () {
    if (this.travel != 0) {
        this.y++;
        this.travel--;
    }
};

Orbital.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.setLineDash([]);
    if (this.type == 0) {
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#808080";
        ctx.fillStyle = "#ffb434";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    } else if (this.type == 1) {
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#808080";
        ctx.fillStyle = "#ff83db";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    ctx.stroke();
    ctx.lineWidth = "1";
    ctx.closePath();
};

Orbital.prototype.drawWhileMoving = function (ctx) {
    ctx.beginPath();
    ctx.setLineDash([]);
    if (this.type == 0) {
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#ff0000";
        ctx.font = "40px Arial";
        ctx.fillStyle = "#ffc0cb";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#ff0000";
        ctx.fillText("+", this.x + 6, this.y + 32);
    } else if (this.type == 1) {
        ctx.lineWidth = "2";
        ctx.strokeStyle = "#0000ff";
        ctx.font = "40px Arial";
        ctx.fillStyle = "#00ffff";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#0000ff";
        ctx.fillText("–", this.x + 6, this.y + 30);
    }
    ctx.stroke();
    ctx.lineWidth = "1";
    ctx.closePath();
};