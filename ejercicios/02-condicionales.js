const hora = 9;

if (hora < 12) {
  console.log("Buen día");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

const valores = [0, "0", "", " ", [], {}, null, "false", NaN, -1];

for (const v of valores) {
  if (v) {
    console.log(v, "→ truthy");
  } else {
    console.log(v, "→ falsy");
  }
}