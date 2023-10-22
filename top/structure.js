let Carbon = new ElementObject(6, 'C', 0.70, 144, 144, 144);
let Nitrogen = new ElementObject(7, 'N', 0.65, 48, 80, 248);
let Silicon = new ElementObject(14, 'Si', 1.11, 240, 200, 160);
let Gallium = new ElementObject(31, 'Ga', 1.30, 194, 143, 143);
let Germanium = new ElementObject(32, 'Ge', 1.00, 102, 143, 143);
let Arsenic = new ElementObject(33, 'As', 1.15, 189, 128, 227);

let structure = new Structure();

//tieto objekty ulozime do jedneho pola
array = [Carbon, Nitrogen, Silicon, Gallium, Germanium, Arsenic];

function addAtom(atomic_num, x, y, z) {
    structure.num_atoms++;
    var num_atoms = structure.num_atoms;
    var i = 0;
    for (i; i < 6; i++)
    {
        if  (array[i].number == atomic_num)
        {
            var objekt = array[i];
        }
    }

    structure.atoms[num_atoms] = new Atom(atomic_num, objekt, x, y, z);
}

function addBond(atom1, atom2, type) {
    structure.num_bonds++;
    var num_bonds = structure.num_bonds;

    structure.bonds[num_bonds] = new Bond(atom1, atom2, type);
}

function drawStructure() {
    var i, k, atom1, atom2, radius;
    var deep = [];

    var ctx = document.getElementById("canvas_structure").getContext('2d');
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Depth sort: Draw from back to front
    if ( deep.length != structure.num_atoms ) {
        atom2 = 0;
        deep = [];
        for (i = deep.length; i < structure.num_atoms; i++) {
            atom2++;
            deep[i] = [];
            deep[i].id = atom2;
        }
    }

    for (i = 0; i < structure.num_atoms; i++) {
        atom2 = deep[i].id;
        deep[i].z = structure.atoms[atom2].z;
    }

    deep.sort(function(a,b) {
        return(b.z - a.z);
    });

    // Loop over all atoms in structure
    for (i = 0; i < structure.num_atoms; i++) {
        atom1 = deep[i].id;
        structure.atoms[atom1].draw(ctx);     // vykreslenie atomu

        // Loop over all bonds on current atom
        for (i = 0; i < structure.num_atoms; i++) {
            atom1 = deep[i].id;
            structure.atoms[atom1].draw(ctx);     // vykreslenie atomu

            for (var p = 1; p <= structure.num_bonds; p++)
            {
                if (structure.bonds[p].atom1 == atom1 || structure.bonds[p].atom2 == atom1)
                {
                    for (var s = i + 1; s < structure.num_atoms; s++)
                    {
                        if (deep[s].id == structure.bonds[p].atom1 || deep[s].id == structure.bonds[p].atom2)
                        {
                            structure.bonds[p].draw(ctx, atom1, deep[s].id);
                        }
                    }
                }
            }
        }
    }
}