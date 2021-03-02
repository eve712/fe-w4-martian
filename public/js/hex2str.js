const hexArr2decArr = hexArr => hexArr.map(hex => parseInt(hex, 16));

const decArr2str = decArr => String.fromCharCode(...decArr);
