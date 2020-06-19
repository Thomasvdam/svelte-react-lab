function createNode(key) {
    const node = {
        drawKey: key,
        left: null,
        right: null,
    }

    return node;
}

function coinFlip() {
    return Math.random() > 0.5;
}

function getLeaf(leaves) {
    return leaves[Math.floor(Math.random() * leaves.length)];
}

function genereateTree(size) {
    const root = createNode('O');
    const leaves = [root];
    
    for (let i = 0; i < size; i++) {
        const leaf = getLeaf(leaves);
        let drawKey = leaf.drawKey;
        if (coinFlip()) {
            if (!leaf.left) {
                drawKey += 'l';
                leaf.left = createNode(drawKey);
                leaves.push(leaf.left);
            } else {
                drawKey += 'r';
                leaf.right = createNode(drawKey);
                leaves.push(leaf.right);
            }
        } else {
            if (!leaf.right) {
                drawKey += 'r';
                leaf.right = createNode(drawKey);
                leaves.push(leaf.right);
            } else {
                drawKey += 'l';
                leaf.left = createNode(drawKey);
                leaves.push(leaf.left);
            }
        }
    
        if (leaf.left && leaf.right) {
            const index = leaves.indexOf(leaf);
            leaves.splice(index, 1);
        }
    }

    return root;
}

export default genereateTree;
