function Structure() {
    this.atoms = []; //vsetky atomy
    this.bonds = []; //vsetky vazby
    this.num_atoms = 0;
    this.num_bonds = 0;
    this.atomscale = 1.0;
}

function Atom(atomic_number, element, x, y, z) {
    this.atomic_number = atomic_number;
    this.element = element;
    this.x = x;
    this.y = y;
    this.z = z;
}

function ElementObject(number, symbol, radius, red, green, blue) {
    this.number = number;
    this.symbol = symbol;
    this.radius = radius;
    this.color   = "rgb("+red+","+green+","+blue+")";
    this.gradient = "rgb("+Math.floor(red/2)+","+Math.floor(green/2)+","+Math.floor(blue/2)+")";
}

function Bond(atom1, atom2, type) {
    this.atom1 = atom1;
    this.atom2 = atom2;
    this.type = type;
}

Atom.prototype.draw = function (ctx)
{
    var x, y, r, atom_color;
    var cW = ctx.canvas.width, cH = ctx.canvas.height;

    x = structure.atomscale * this.x + cW / 2;
    y = structure.atomscale * this.y + cH / 2;
    r = structure.atomscale * 0.5 * this.element.radius;
    atom_color = ctx.createRadialGradient(x, y, r, x - (0.20 * r), y - (0.20 * r), 0.30 * r);
    atom_color.addColorStop(0, this.element.gradient);
    atom_color.addColorStop(1, this.element.color);

    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI, false);
    ctx.fillStyle = atom_color;
    ctx.fill();
    ctx.lineWidth = 0.01;
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
};

Bond.prototype.draw = function(ctx, atom1) {
    var x1, y1, z1, x2, y2, z2;
    var dx, dy, dz;
    var xoff, yoff;
    var dist, r;
    var cW = ctx.canvas.width, cH = ctx.canvas.height;
    var atomscale = structure.atomscale;
    var radius;
    var bondColor, bondWidth;

    if (atom1 != this.atom1) // poradie je dolezite!!!
    {
        radius = structure.atoms[this.atom2].element.radius;
        x1 = atomscale * structure.atoms[this.atom2].x + cW / 2;
        y1 = atomscale * structure.atoms[this.atom2].y + cH / 2;
        z1 = atomscale * structure.atoms[this.atom2].z;
        x2 = atomscale * structure.atoms[this.atom1].x + cW / 2;
        y2 = atomscale * structure.atoms[this.atom1].y + cH / 2;
        z2 = atomscale * structure.atoms[this.atom1].z;
    } else {
        radius = structure.atoms[this.atom1].element.radius;
        x1 = atomscale * structure.atoms[this.atom1].x + cW / 2;
        y1 = atomscale * structure.atoms[this.atom1].y + cH / 2;
        z1 = atomscale * structure.atoms[this.atom1].z;
        x2 = atomscale * structure.atoms[this.atom2].x + cW / 2;
        y2 = atomscale * structure.atoms[this.atom2].y + cH / 2;
        z2 = atomscale * structure.atoms[this.atom2].z;
    }

    r =  atomscale * 0.5 * radius;

    dx = x2 - x1;
    dy = y2 - y1;
    dz = z2 - z1;
    dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    xoff = x1 + r * dx / dist;
    yoff = y1 + r * dy / dist;

    if(this.type == 1)
    {
        bondColor = "rgb(238,238,238)";
        bondWidth = Math.floor(0.08 * atomscale + 0.5);
    } else {
        bondColor = "rgb(75,47,19)";
        bondWidth = Math.floor(0.10 * atomscale + 0.5);
    }

    ctx.beginPath();
    ctx.moveTo(xoff, yoff);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = bondWidth;
    ctx.strokeStyle = bondColor;
    ctx.stroke();
    ctx.closePath();
};